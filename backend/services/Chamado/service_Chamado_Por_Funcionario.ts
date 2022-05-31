import { prisma } from '../../utils/db.server'

class ServiceChamadoPorFuncionario {
  async execute(id: string) {
    if (id) {
      const chamado = await prisma.chamado.findMany({ where: { funcionarioId: id } })
      return chamado
    }
    return null
  }
}

export { ServiceChamadoPorFuncionario }