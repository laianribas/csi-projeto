import { PrismaClient } from "@prisma/client";

class ServiceResgatarFuncionario {
  async execute(id: string) {
    const prisma = new PrismaClient()
    const funcionario = await prisma.funcionario.findUnique({ where: { id: id } })
    return funcionario
  }
}

export { ServiceResgatarFuncionario }