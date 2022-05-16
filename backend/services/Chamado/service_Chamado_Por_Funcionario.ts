import { PrismaClient } from '@prisma/client';
class ServiceChamadoPorFuncionario {
  async execute(id: string) {
    const prisma = new PrismaClient()
    const chamado = await prisma.chamado.findMany({ where: { funcionarioId: id } })
    return chamado
  }
}

export { ServiceChamadoPorFuncionario }