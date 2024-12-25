import Costumer from "../../entities/Costumer";
import { AppError } from "../../exceptions/AppError";
import CostumerRepository, {
  ICostumerRepository,
} from "../../repositories/CostumerRepository";
import CreateCostumerDTO from "./CreateCostumerDTO";

export default class CreateCostumerUseCase {
  private costumerRepository: ICostumerRepository;

  constructor() {
    this.costumerRepository = new CostumerRepository();
  }
  async execute(dto: CreateCostumerDTO): Promise<Costumer> {
    const existingCostumer = await this.costumerRepository.findByEmail(
      dto.email
    );

    if (existingCostumer) throw new AppError("User already exists!");

    const costumer = await this.costumerRepository.create({
      name: dto.name,
      email: dto.email,
    });

    return costumer;
  }
}
