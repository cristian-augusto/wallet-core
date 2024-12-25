import database from "../database";
import Costumer from "../entities/Costumer";
import BaseRepository from "./BaseRepository";
import IRepository from "./IRepository";

export interface ICostumerRepository extends IRepository<Costumer> {
  findByEmail(email: string): Promise<Costumer | null>;
}

export default class CostumerRepository
  extends BaseRepository<Costumer>
  implements ICostumerRepository
{
  async create(dto: Omit<Costumer, "id">): Promise<Costumer> {
    const statement = database.prepare(
      `INSERT INTO costumers (id, name, email) VALUES (?, ?, ?)`
    );

    const id = this.generateID();

    statement.run(id, dto.name, dto.email);

    return { ...dto, id };
  }

  async findById(id: string): Promise<Costumer | null> {
    const statement = database.prepare("SELECT * FROM costumers WHERE id = ?");
    const costumer = statement.get(id);
    return costumer ? (costumer as Costumer) : null;
  }

  async findByEmail(email: string): Promise<Costumer | null> {
    const statement = database.prepare(
      "SELECT * FROM costumers WHERE email = ?"
    );
    const costumer = statement.get(email);
    return costumer ? (costumer as Costumer) : null;
  }

  async update(dto: Costumer): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
