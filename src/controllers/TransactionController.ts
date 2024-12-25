import { Request, Response } from "express";
import CreateTransactionUseCase from "../useCases/CreateTransaction/CreateTransactionUseCase";

export default class TransactionController {
  async create(request: Request, response: Response) {
    const createTransactionUseCase = new CreateTransactionUseCase();
    const transaction = await createTransactionUseCase.execute(request.body);
    response.json({ transaction });
  }
}
