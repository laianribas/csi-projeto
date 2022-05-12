import { PrismaClient } from "@prisma/client";

class ServiceEditarChamado {
  async execute(id: string, status: string): Promise<any> {
    const prisma = new PrismaClient()
    const chamado = await prisma.chamado.update({
      where: {
        id: id
      }, data: {
        status: status
      }
    })
    return chamado
  }
}

export { ServiceEditarChamado };
