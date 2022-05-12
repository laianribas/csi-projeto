import { PrismaClient } from "@prisma/client";

class ServiceResgatarTodosFuncionarios {
  async execute(): Promise<any> {
    const prisma = new PrismaClient()
    const funcionarios = await prisma.funcionario.findMany();
    return funcionarios
  }
}

export { ServiceResgatarTodosFuncionarios };
