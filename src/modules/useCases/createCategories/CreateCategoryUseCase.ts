import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../cars/repositories/ICategoriesRepository";

interface IRquest {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCase {
  // principle of inversion dependencies

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRquest): Promise<void> {
    // single responsible principle
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
