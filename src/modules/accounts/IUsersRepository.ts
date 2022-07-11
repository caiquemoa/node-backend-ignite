import { ICreateUserDTO } from "./dtos/ICreateUserDTO";
import { Users } from "./entities/Users";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByName(name: string): Promise<Users>;
  list(): Promise<Users[]>;
}

export { IUsersRepository };
