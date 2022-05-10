import { PrismaClient } from "@prisma/client";

class ServiceEditarFuncionario {
  async execute(id: string, data: object): Promise<any> {
    const prisma = new PrismaClient()
    const funcionario = await prisma.funcionario.update({
      where: {
        id: id
      }, data: data
    })
    return funcionario
  }
}

export { ServiceEditarFuncionario }