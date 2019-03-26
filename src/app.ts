import * as express from 'express';
import * as next from 'next';

const appNext = next({ dir: './src', dev: false });
const handle = appNext.getRequestHandler();

const createApp = (): express.Express => {
  const app = express();

  app.enable('strict routing');

  app.get('*', (req, res) => handle(req, res));

  return app;
}

const app = createApp();

export default app;
