import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const showAllCategories = await listCategoriesUseCase.execute();

    return response.json(showAllCategories);
  }
}

export { ListCategoriesController };
