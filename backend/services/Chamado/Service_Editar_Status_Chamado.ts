import { prisma } from '../../utils/db.server'
class ServiceEditarStatusChamado {
  async execute(id: string, status: number): Promise<any> {
    if (id && status) {
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
