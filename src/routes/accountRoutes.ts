import { Router } from "express";
import AccountController from "../controllers/AccountController";

const accountRoutes = Router();
const accountController = new AccountController();
accountRoutes.post("/", accountController.create);
accountRoutes.get("/:id/balance", accountController.getBalance);

export default accountRoutes;
