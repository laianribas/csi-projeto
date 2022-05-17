import { PrismaClient } from "@prisma/client";

class ServiceResgatarFuncionario {
  async execute(id: string): Promise<any> {
    if (id) {
      const prisma = new PrismaClient()
      const funcionario = await prisma.funcionario.findUnique({ where: { id: id } })
      return funcionario
    }
    return null
  }
}

export { ServiceResgatarFuncionario };
