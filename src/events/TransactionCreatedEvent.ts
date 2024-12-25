import { ICustomEvent } from ".";
import Transaction from "../entities/Transaction";

export default class TransactionCreatedEvent
  implements ICustomEvent<Transaction>
{
  name: string;
  payload: any;
  timestamp: number;
  constructor(data: Transaction) {
    this.name = "TransactionCreated";
    this.payload = data;
    this.timestamp = Date.now();
  }
}
