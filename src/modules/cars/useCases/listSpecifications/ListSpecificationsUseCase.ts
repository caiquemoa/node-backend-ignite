import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
  // principle of inversion dependencies
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute() {
    const specifications = await this.specificationsRepository.list();
    return specifications;
  }
}

export { ListSpecificationsUseCase };
