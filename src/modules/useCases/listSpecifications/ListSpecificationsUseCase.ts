import { ISpecificationsRepository } from "../../cars/repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  // principle of inversion dependencies
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute() {
    const specifications = this.specificationsRepository.list();
    return specifications;
  }
}

export { ListSpecificationsUseCase };
