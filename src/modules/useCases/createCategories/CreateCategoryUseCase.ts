import { ICategoriesRepository } from "../../cars/repositories/ICategoriesRepository";

interface IRquest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  // principle of inversion dependencies
  constructor(private categoriesRepository: ICategoriesRepository) {}

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
