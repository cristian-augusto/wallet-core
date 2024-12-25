import { Request, Response } from "express";
import CreateAccountUseCase from "../useCases/CreateAccount/CreateAccountUseCase";
import GetBalanceUseCase from "../useCases/GetBalance/GetBalanceUseCase";

export default class AccountController {
  async create(request: Request, response: Response) {
    const createAccountUseCase = new CreateAccountUseCase();
    const account = await createAccountUseCase.execute(request.body);
    response.json({ account });
  }

  async getBalance(request: Request, response: Response) {
    const getBalanceUseCase = new GetBalanceUseCase();
    const { id } = request.params;
    const balance = await getBalanceUseCase.execute({ account_id: id });
    response.json({ balance });
  }
}
