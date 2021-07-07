import { UserRepository } from "@/api/user/repository";

export class UserService {
  async getUsers() {
    // Consumir repositorio de users
    const userRepository = new UserRepository();
    const result = await userRepository.getAllUsers();

    return result;
  }
}
