import { ICustomEvent } from "..";
import Transaction from "../../entities/Transaction";
import { transactionCreatedProducer } from "../../messaging/producers/transactionProducer";

export default class TransactionCreatedHandler {
  async handle(event: ICustomEvent<Transaction>) {
    transactionCreatedProducer(event.payload);
  }
}
