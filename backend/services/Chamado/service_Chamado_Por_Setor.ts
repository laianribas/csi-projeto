import { PrismaClient } from '@prisma/client';

class ServiceChamadoPorSetor {
  async execute(id: string[]) {
    if (id) {
      const prisma = new PrismaClient()
      const chamado = await prisma.chamado.findMany({ where: { setorId: { in: id } } })
      return chamado
    }
    return null
  }
}

export { ServiceChamadoPorSetor }