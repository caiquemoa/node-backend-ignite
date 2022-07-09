import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database";
import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Repository<Specification>;

  constructor() {
    this.specifications = AppDataSource.getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationsDTO): Promise<void> {
    const specification = this.specifications.create({
      name,
      description,
    });

    await this.specifications.save(specification);
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.specifications.find();
    return specifications;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.specifications.findOne({
      where: { name },
    });
    return specification;
  }
}

export { SpecificationsRepository };
