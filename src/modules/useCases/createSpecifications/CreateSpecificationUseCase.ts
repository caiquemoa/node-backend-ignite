import { ISpecificationsRepository } from "../../cars/repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  // principle of inversion dependencies
  constructor(private specificationRepository: ISpecificationsRepository) {}
  execute({ name, description }: IRequest) {
    // single responsible principle
    const specificatiionAlreadyExistis =
      this.specificationRepository.findByName(name);

    if (specificatiionAlreadyExistis) {
      throw new Error("Specification already exists!");
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
