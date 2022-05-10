import { PrismaClient } from "@prisma/client";

class ServiceInativarFuncionario {
  async execute(id: string): Promise<any> {
    const prisma = new PrismaClient()
    const funcionario = await prisma.funcionario.update({
      where: {
        id: id
      }, data: {
        ativo: false
      }
    })
    return funcionario
  }
}

export { ServiceInativarFuncionario }