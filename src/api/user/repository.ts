import { PrismaClient } from "@prisma/client";

export class UserRepository {
  prisma: PrismaClient;

  constructor() {
    // inicializar la DB
    this.prisma = new PrismaClient();
  }

  async getAllUsers() {
    // Obtiene todos los usuarios de la DB con prisma
    const users = await this.prisma.user.findMany();

    return users;
  }
}
