import 'reflect-metadata';
import 'dotenv/config';

import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@as-integrations/express5';
import cors from 'cors';
import express from 'express';
import http from 'http';

import { AppDataSource } from './db/data-source.js';
import { createApp } from './app.js';
import { createGraphQLSchema } from './common/graphql/schema.js';
import { GraphQLContext } from './common/graphql/context.js';

const PORT = Number(process.env.PORT);
const APP_HOST = process.env.APP_HOST!;

async function bootstrap() {
  const app = createApp();
  const httpServer = http.createServer(app);

  try {
    await AppDataSource.initialize();
    console.log('Database connected successfully');

    const schema = await createGraphQLSchema();
    const apolloServer = new ApolloServer<GraphQLContext>({
      schema,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await apolloServer.start();

    app.use(
      '/graphql',
      cors<cors.CorsRequest>({
        origin: process.env.CORS_ORIGIN ?? 'http://localhost:3000',
        credentials: true,
      }),
      express.json(),
      expressMiddleware(apolloServer, {
        context: async ({ req, res }) => ({
          req,
          res,
          dataSource: AppDataSource,
        }),
      }),
    );

    await new Promise<void>((resolve) => {
      httpServer.listen(PORT, APP_HOST, () => {
        resolve();
      });
    });

    console.log(`Server is running at http://${APP_HOST}:${PORT}`);
    console.log(`GraphQL is running at http://${APP_HOST}:${PORT}/graphql`);

    async function shutdown(signal: NodeJS.Signals) {
      console.log(`${signal} received. Shutting down...`);

      try {
        await apolloServer.stop();

        if (AppDataSource.isInitialized) {
          await AppDataSource.destroy();
          console.log('Database connection closed');
        }

        process.exit(0);
      } catch (error) {
        console.error('Error during shutdown:', error);
        process.exit(1);
      }
    }

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
  } catch (error) {
    console.log('Failed to start application', error);
    process.exit(1);
  }
}

void bootstrap();