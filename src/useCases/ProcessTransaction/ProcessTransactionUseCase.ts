import AccountRepository, {
  IAccountRepository,
} from "../../repositories/AccountRepository";
import ProcessTransactionDTO from "./ProcessTransactionDTO";

export default class ProcessTransactionUseCase {
  private accountRepository: IAccountRepository;

  constructor() {
    this.accountRepository = new AccountRepository();
  }
  async execute(dto: ProcessTransactionDTO) {
    const { source_account_id, destination_account_id, amount } =
      dto.transaction;

    const sourceAccount = await this.accountRepository.findById(
      source_account_id
    );
    const destinationAccount = await this.accountRepository.findById(
      destination_account_id
    );
    if (!sourceAccount || !destinationAccount) return;

    sourceAccount.balance -= amount;
    destinationAccount.balance += amount;

    await this.accountRepository.update(sourceAccount);
    await this.accountRepository.update(destinationAccount);
  }
}
