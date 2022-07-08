import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const showAllCategories = await this.listCategoriesUseCase.execute();
    console.log(showAllCategories);

    return response.json(showAllCategories);
  }
}

export { ListCategoriesController };
