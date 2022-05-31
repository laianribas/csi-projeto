import { prisma } from '../../utils/db.server'
class ServiceEditarFuncionario {
  async execute(id: string, data: object): Promise<any> {
    if (id && data) {
      const funcionario = await prisma.funcionario.update({
        where: {
          id: id
        }, data: data
      })
      return funcionario
    }
    return null
  }
}

export { ServiceEditarFuncionario };
