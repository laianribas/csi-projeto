import { prisma } from '../../utils/db.server'
class ServiceResgatarChamado {
  async execute(id: string): Promise<any> {
    if (id) {
      const chamado = await prisma.chamado.findUnique({ where: { id: id } })
      return chamado
    }
    return null
  }
}

export { ServiceResgatarChamado };
