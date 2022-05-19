import { PrismaClient } from "@prisma/client"

class FuncionarioPorCampus {
  async execute(campus: string): Promise<any> {
    if (campus) {
      const prisma = new PrismaClient()
      const funcionarios = await prisma.funcionario.findMany({
        where: {
          campus: {
            contains: campus
          }
        }
      })
      return funcionarios
    }
    return null
  }
}

export { FuncionarioPorCampus }