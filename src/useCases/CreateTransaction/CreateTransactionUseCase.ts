import EventManager from "../../events";
import TransactionCreatedEvent from "../../events/TransactionCreatedEvent";
import { AppError } from "../../exceptions/AppError";
import AccountRepository, {
  IAccountRepository,
} from "../../repositories/AccountRepository";
import TransactionRepository, {
  ITransactionRepository,
} from "../../repositories/TransactionRepository";
import CreateTransactionDTO from "./CreateTransactionDTO";

export default class CreateTransactionUseCase {
  private accountRepository: IAccountRepository;
  private transactionRepository: ITransactionRepository;

  constructor() {
    this.accountRepository = new AccountRepository();
    this.transactionRepository = new TransactionRepository();
  }
  async execute(dto: CreateTransactionDTO) {
    const sourceAccount = await this.accountRepository.findById(
      dto.source_account_id
    );
    const destinationAccount = await this.accountRepository.findById(
      dto.destination_account_id
    );

    if (!sourceAccount || !destinationAccount)
      throw new AppError("Source/Destination account not found!");

    const transaction = await this.transactionRepository.create({
      source_account_id: sourceAccount.id,
      destination_account_id: destinationAccount.id,
      amount: dto.amount,
    });

    const event = new TransactionCreatedEvent(transaction);
    EventManager.dispatch(event);

    return transaction;
  }
}
