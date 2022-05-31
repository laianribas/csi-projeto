import { prisma } from '../../utils/db.server'
class ServiceResgatarSetor {
  async execute(id: number): Promise<any> {
    if (id) {
      const setor = await prisma.setor.findUnique({ where: { id: id } })
      return setor
    }
    return null
  }
}

export { ServiceResgatarSetor };
