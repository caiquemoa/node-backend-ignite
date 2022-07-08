import { Category } from "../../cars/entities/Category";
import { ICategoriesRepository } from "../../cars/repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  //  principle of inversion dependencies
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
