import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  // principle of inversion dependencies
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository
  ) {}
  async execute({ name, description }: IRequest) {
    // single responsible principle
    const specificatiionAlreadyExistis =
      await this.specificationRepository.findByName(name);

    if (specificatiionAlreadyExistis) {
      throw new AppError("Specification already exists!");
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
