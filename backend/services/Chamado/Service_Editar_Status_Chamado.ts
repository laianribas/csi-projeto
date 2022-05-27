import { PrismaClient } from "@prisma/client";

class ServiceEditarStatusChamado {
  async execute(id: string, status: number): Promise<any> {
    if (id && status) {
      const prisma = new PrismaClient()
      const chamado = await prisma.chamado.update({
        where: {
          id: id
        }, data: {
          status: {
            connect: {
              chamadoId_statusId: {
                chamadoId: id,
                statusId: status,
              }
            }
          }
        }
      })
      return chamado
    }
    return null
  }
}

export { ServiceEditarStatusChamado };
