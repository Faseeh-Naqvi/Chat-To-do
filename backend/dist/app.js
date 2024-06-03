import express from 'express';
const app = express(); //holds fundtionality of the express application
import { config } from "dotenv";
import morgan from 'morgan';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
config();
//middlewares
app.use(express.json());
//middleware for passing cookies to frontenc
app.use(cookieParser(process.env.COOKIE_SECRET));
//remove it from production
app.use(morgan("dev")); //if we make a call to the backend this will give us the log message
//create all middlewares:
app.use("/api/v1", appRouter); //after express reaches this endpoint: "api/v1" then it will be handled by appRouter.
//App router(in index.ts in \routes) will then either send it to chat-routes or user-routes
export default app;
//# sourceMappingURL=app.js.map