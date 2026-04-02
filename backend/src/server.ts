// Setup do server

import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import { loggerMiddleware } from "./middlewares/logger";
import { appRouter } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use(loggerMiddleware);

app.use(appRouter);

app.use(errorHandler);

export { app };
