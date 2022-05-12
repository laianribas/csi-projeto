import { PrismaClient } from "@prisma/client";

class ServiceResgatarTodosChamados {
  async execute(): Promise<any> {
    const prisma = new PrismaClient()
    const chamados = await prisma.chamado.findMany();
    return chamados
  }
}

export { ServiceResgatarTodosChamados };
