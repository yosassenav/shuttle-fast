// SERVICE LAYER

import { UserRepository } from "./repository";

export class UserService {
  async getUsers() {
    // Consumir repositorio de users
    const userRepository = new UserRepository();
    const result = await userRepository.getAllUsers();

    // logica de negocio

    result.map((user) => (user.name = "Logica Especial"));

    return result;
  }
}
