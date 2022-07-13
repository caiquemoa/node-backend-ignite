/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppError } from "../../../../errors/AppError";
import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class PostgressCategoriesRepository implements ICategoriesRepository {
  async findByName(name: string): Promise<Category> {
    throw new AppError("Method not implemented.");
  }
  async list(): Promise<Category[]> {
    throw new AppError("Method not implemented.");
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    throw new AppError("Method not implemented.");
  }
}

export { PostgressCategoriesRepository };
