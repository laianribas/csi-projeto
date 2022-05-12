import { PrismaClient } from "@prisma/client";

class ServiceResgatarTodosSetores {
  async execute(): Promise<any> {
    const prisma = new PrismaClient()
    const setores = await prisma.setor.findMany();
    return setores
  }
}

export { ServiceResgatarTodosSetores };
