import 'reflect-metadata';
import 'dotenv/config';

import { app } from './app';
import AppDataSource from './db/data-source';

const PORT = Number(process.env.PORT ?? 4000);
const APP_HOST = process.env.APP_HOST ?? '0.0.0.0';

async function bootstrap() {
  try {
    await AppDataSource.initialize();

    console.log('Database connected successfully');

    const server = app.listen(PORT, APP_HOST, () => {
      console.log(`Server is running at http://${APP_HOST}:${PORT}`);
    });

    async function shutdown(signal: NodeJS.Signals) {
      console.log(`${signal} received. Shutting down...`);

      server.close(async () => {
        try {
          if (AppDataSource.isInitialized) {
            await AppDataSource.destroy();
            console.log('Database connection closed');
          }

          process.exit(0);
        } catch (error) {
          console.error('Error during shutdown:', error);
          process.exit(1);
        }
      });
    }

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
  } catch (error) {
    console.log('Failed to start application', error);
    process.exit(1);
  }
}

void bootstrap();