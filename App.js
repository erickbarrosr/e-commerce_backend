import express from "express";
import database from "./src/configs/database";

class App {
  constructor() {
    this.app = express();
    this.db = database();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {}
}

export default new App().app;
