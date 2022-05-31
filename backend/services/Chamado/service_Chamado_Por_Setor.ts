import { prisma } from '../../utils/db.server'
class ServiceChamadoPorSetor {
  async execute(id: number[]) {
    if (id) {
      const chamado = await prisma.chamado.findMany({ where: { setorId: { in: id } } })
      return chamado
    }
    return null
  }
}

export { ServiceChamadoPorSetor }