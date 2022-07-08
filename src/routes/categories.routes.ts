import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/useCases/createCategories";
import { importCategoryController } from "../modules/useCases/importCategory";
import listCategoriesController from "../modules/useCases/listCategories";

const categorieRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categorieRoutes.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
});

categorieRoutes.get("/", (request, response) => {
  return listCategoriesController().handle(request, response);
});

categorieRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categorieRoutes };
