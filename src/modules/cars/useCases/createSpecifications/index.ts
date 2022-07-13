import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationsController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationsRepository.getInstance();

const createSpecificationsUseCase = new CreateSpecificationUseCase(
  specificationRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationsUseCase
);

export { createSpecificationController };
