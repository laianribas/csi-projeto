import { prisma } from '../../utils/db.server'

class ServiceChamadoPorFuncionario {
  async execute(id: string) {
    if (id) {
      const chamado = await prisma.chamado.findMany({
        where: {
          funcionarioId: id
        },
        include: {
          setor: true,
          status: {
            select: {
              createdAt: true,
              status: true
            }
          }
        }
      })
      return chamado
    }
    return null
  }
}

export { ServiceChamadoPorFuncionario }