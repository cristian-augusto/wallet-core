import database from "../database";
import Transaction from "../entities/Transaction";
import BaseRepository from "./BaseRepository";
import IRepository from "./IRepository";

export interface ITransactionRepository extends IRepository<Transaction> {}

export default class TransactionRepository
  extends BaseRepository<Transaction>
  implements ITransactionRepository
{
  async create(dto: Omit<Transaction, "id">): Promise<Transaction> {
    const statement = database.prepare(
      `INSERT INTO transactions (id, source_account_id, destination_account_id, amount) VALUES (?, ?, ?, ?)`
    );

    const id = this.generateID();

    statement.run(
      id,
      dto.source_account_id,
      dto.destination_account_id,
      dto.amount
    );

    return { ...dto, id };
  }

  async findById(id: string): Promise<Transaction | null> {
    const statement = database.prepare(
      "SELECT * FROM transaction WHERE id = ?"
    );
    const transaction = statement.get(id);
    return transaction ? (transaction as Transaction) : null;
  }

  async update(dto: Transaction): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
