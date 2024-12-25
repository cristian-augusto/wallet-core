import { AppError } from "../../exceptions/AppError";
import AccountRepository, {
  IAccountRepository,
} from "../../repositories/AccountRepository";
import GetBalanceDTO from "./GetBalanceDTO";

export default class GetBalanceUseCase {
  private accountRepository: IAccountRepository;
  constructor() {
    this.accountRepository = new AccountRepository();
  }

  async execute(dto: GetBalanceDTO) {
    const account = await this.accountRepository.findById(dto.account_id);

    if (!account) throw new AppError("Account not found!");

    return account.balance;
  }
}
