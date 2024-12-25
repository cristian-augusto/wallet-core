import { HttpStatus } from "./HttpStatus";

export class AppError extends Error {
  public readonly status: number;

  constructor(message: string, status: number = HttpStatus.BAD_REQUEST) {
    super(message);
    this.status = status;
  }
}
