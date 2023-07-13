import "express-async-errors";
import express, { Express, Request, Response } from "express";
import cors from "cors";

import { loadEnv } from "./config/envs";
import { connectDB, disconnectDB } from "./config/database";
import { handleApplicationErrors } from "./middlewares/error-handling-middleware";
import {empresaRouter} from "./routers/empresa-router";
loadEnv();



const app = express();

app
    .use(cors())
    .use(express.json())
    .get("/about", (_req: Request, res: Response) => res.send("OK!"))
    .use("/empresa",  empresaRouter)
    .use(handleApplicationErrors);

export function init(): Promise<Express> {
    connectDB();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app;