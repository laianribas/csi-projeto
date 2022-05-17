import { PrismaClient } from "@prisma/client";

class ServiceEditarChamado {
  async execute(id: string, data: object): Promise<any> {
    if (id && data) {
      const prisma = new PrismaClient()
      const chamado = await prisma.chamado.update({
        where: {
          id: id
        }, data: data
      })
      return chamado
    }
    return null
  }
}

export { ServiceEditarChamado };
