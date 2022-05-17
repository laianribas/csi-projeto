import { PrismaClient } from "@prisma/client";

class ServiceEditarFuncionario {
  async execute(id: string, data: object): Promise<any> {
    if (id && data) {
      const prisma = new PrismaClient()
      const funcionario = await prisma.funcionario.update({
        where: {
          id: id
        }, data: data
      })
      return funcionario
    }
    return null
  }
}

export { ServiceEditarFuncionario };
