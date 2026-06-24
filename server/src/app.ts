import express, { Request, Response } from 'express';

export function createApp() {
  const app = express();

  app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({
      status: 'ok',
      service: 'backend',
    });
  });

  return app;
}