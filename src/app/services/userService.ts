import { User } from "@prisma/client";

const GET_URI = "/api/users";

export class UserService {
  static async get() {
    const res = await fetch("http://localhost:3000/api/users");
    const users = (await res.json()) as Array<User>;

    return users;
  }
}
