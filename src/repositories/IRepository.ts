export default interface IRepository<T> {
  create(dto: Partial<T>): Promise<T>;
  findById(id: string): Promise<T | null>;
  update(dto: T): Promise<void>;
}
