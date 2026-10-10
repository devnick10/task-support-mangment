import express from "express";
import { Express, Request, Response } from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { notFoundHandler } from "./middlewares/notFound";
import cors from "cors";
import { apiRouter } from "./routes";

export function createApp() {
    const app: Express = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(cors());

    app.use("/api", apiRouter);

    app.use(notFoundHandler);
    app.use(errorHandler);
    return app;
}