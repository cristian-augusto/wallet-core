import { Router } from "express";
import CostumerController from "../controllers/CostumerController";

const costumerRoutes = Router();
const costumerController = new CostumerController();
costumerRoutes.post("/", costumerController.create);

export default costumerRoutes;
