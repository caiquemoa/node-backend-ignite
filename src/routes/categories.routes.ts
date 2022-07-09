import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/useCases/createCategories/CreateCategoryController";
import { ImportCategoryController } from "../modules/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/useCases/listCategories/ListCategoriesController";

const categorieRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

categorieRoutes.post("/", createCategoryController.handle);

categorieRoutes.get("/", listCategoriesController.handle);

categorieRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categorieRoutes };
