import express, { json } from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(json()); // Na aula é usado 'express.json()', sem o 'import ... { json } ...
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server;
