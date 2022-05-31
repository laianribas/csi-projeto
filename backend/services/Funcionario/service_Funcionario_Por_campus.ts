import { prisma } from '../../utils/db.server'
class ServiceFuncionarioPorCampus {
  async execute(campus: string): Promise<any> {
    if (campus) {
      const funcionarios = await prisma.funcionario.findMany({
        where: {
          campus: {
            equals: campus
          }
        }
      })
      return funcionarios
    }
    return null
  }
}

export { ServiceFuncionarioPorCampus }