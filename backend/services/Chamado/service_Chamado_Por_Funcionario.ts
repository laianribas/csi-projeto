import { PrismaClient } from '@prisma/client';
class ServiceChamadoPorFuncionario {
  async execute(id: string) {
    if (id) {
      const prisma = new PrismaClient()
      const chamado = await prisma.chamado.findMany({ where: { funcionarioId: id } })
      return chamado
    }
    return null
  }
}

export { ServiceChamadoPorFuncionario }