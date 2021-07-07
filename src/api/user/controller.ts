import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "@/api/user/service";

export class UserController {
  async getUsers(req: NextApiRequest, res: NextApiResponse) {
    // valida la petición REST.
    // consume servicio de usuarios.
    const service = new UserService();
    const result = await service.getUsers();

    return result;
  }
}
