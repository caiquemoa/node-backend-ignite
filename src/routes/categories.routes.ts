import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/useCases/createCategories/CreateCategoryController";
import { importCategoryController } from "../modules/useCases/importCategory";
import listCategoriesController from "../modules/useCases/listCategories";

const categorieRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categorieRoutes.post("/", createCategoryController.handle);

categorieRoutes.get("/", (request, response) => {
  return listCategoriesController().handle(request, response);
});

categorieRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categorieRoutes };
