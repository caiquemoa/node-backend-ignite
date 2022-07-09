import { inject, injectable } from "tsyringe";

import { Category } from "../../cars/entities/Category";
import { ICategoriesRepository } from "../../cars/repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  //  principle of inversion dependencies
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
