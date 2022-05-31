import { prisma } from '../../utils/db.server'
class ServiceChamadoPorCampus {
  async execute(funcionarios: { id: string }[]) {
    if (funcionarios.length > 0) {
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