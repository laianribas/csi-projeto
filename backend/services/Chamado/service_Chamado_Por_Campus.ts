import { PrismaClient } from "@prisma/client";

class ServiceChamadoPorCampus {
  async execute(funcionarios: { id: string }[]) {
    if (funcionarios.length > 0) {
      const prisma = new PrismaClient()
      const chamados = await Promise.all(
        funcionarios.map(async (funcionario) => {
          return await prisma.chamado.findMany({
            where: {
              funcionarioId: funcionario.id
            }
          })
        })
      )
      return chamados
    }
    return null
  }
}

export { ServiceChamadoPorCampus }