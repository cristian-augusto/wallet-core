import express from "express";
import "express-async-errors";
import "./database";
import "./messaging";
import EventManager from "./events";
import TransactionCreatedHandler from "./events/handlers/TransactionCreatedHandler";
import errorHandler from "./exceptions/errorHandler";
import accountRoutes from "./routes/accountRoutes";
import costumerRoutes from "./routes/costumerRoutes";
import transactionRoutes from "./routes/transactionRoutes";
import { transactionCreatedConsumer } from "./messaging/consumers/transactionConsumer";

const app = express();

app.use(express.json());
app.use("/api/costumer", costumerRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/transaction", transactionRoutes);

app.use(errorHandler);

EventManager.register("TransactionCreated", new TransactionCreatedHandler());

transactionCreatedConsumer();

app.listen(3003, () => console.log("Service wallet-core running..."));
