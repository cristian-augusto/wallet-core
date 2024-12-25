import database from "../database";
import Account from "../entities/Account";
import BaseRepository from "./BaseRepository";
import IRepository from "./IRepository";

export interface IAccountRepository extends IRepository<Account> {}

export default class AccountRepository
  extends BaseRepository<Account>
  implements IAccountRepository
{
  async create(dto: Omit<Account, "id">): Promise<Account> {
    const statement = database.prepare(
      `INSERT INTO accounts (id, costumer_id, balance) VALUES (?, ?, ?)`
    );

    const id = this.generateID();

    statement.run(id, dto.costumer_id, dto.balance);

    return { ...dto, id };
  }

  async findById(id: string): Promise<Account | null> {
    const statement = database.prepare("SELECT * FROM accounts WHERE id = ?");
    const account = statement.get(id);
    return account ? (account as Account) : null;
  }

  async update(dto: Account): Promise<void> {
    const statement = database.prepare(
      `UPDATE accounts SET balance = ? WHERE id = ?`
    );

    statement.run(dto.balance, dto.id);
  }
}
