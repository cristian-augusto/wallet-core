import IRepository from "./IRepository";
import { v4 as uuid } from "uuid";

export default abstract class BaseRepository<T> implements IRepository<T> {
  abstract create(dto: Partial<T>): Promise<T>;
  abstract findById(id: string): Promise<T | null>;
  abstract update(dto: T): Promise<void>;

  generateID() {
    return uuid();
  }
}
