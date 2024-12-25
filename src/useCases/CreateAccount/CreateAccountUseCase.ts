import { AppError } from "../../exceptions/AppError";
import AccountRepository, {
  IAccountRepository,
} from "../../repositories/AccountRepository";
import CostumerRepository, {
  ICostumerRepository,
} from "../../repositories/CostumerRepository";
import CreateAccountDTO from "./CreateAccountDTO";

export default class CreateAccountUseCase {
  private accountRepository: IAccountRepository;
  private costumerRepository: ICostumerRepository;

  constructor() {
    this.accountRepository = new AccountRepository();
    this.costumerRepository = new CostumerRepository();
  }
  async execute(dto: CreateAccountDTO) {
    const costumer = await this.costumerRepository.findById(dto.costumer_id);

    if (!costumer) throw new AppError("Costumer not found!");

    const account = await this.accountRepository.create({
      costumer_id: costumer.id,
      balance: 0,
    });

    return account;
  }
}
