import { Request, Response } from "express";
import CreateCostumerUseCase from "../useCases/CreateCostumer/CreateCostumerUseCase";

export default class CostumerController {
  async create(request: Request, response: Response) {
    const createCostumerUseCase = new CreateCostumerUseCase();
    const costumer = await createCostumerUseCase.execute(request.body);
    response.json({ costumer });
  }
}
