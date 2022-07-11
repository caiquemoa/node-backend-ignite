import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { Users } from "../../entities/Users";
import { IUsersRepository } from "../../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = AppDataSource.getRepository(Users);
  }

  async create({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }

  async findByName(name: string): Promise<Users> {
    console.log(name);
    throw new Error("Method not implemented.");
  }
  async list(): Promise<Users[]> {
    throw new Error("Method not implemented.");
  }
}

export { UsersRepository };
