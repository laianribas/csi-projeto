import { prisma } from '../../utils/db.server'
class ServiceInativarFuncionario {
  async execute(id: string): Promise<any> {
    if (id) {
      const funcionario = await prisma.funcionario.update({
        where: {
          id: id
        }, data: {
          ativo: false
        }
      })
      return funcionario
    }
    return null
  }
}

export { ServiceInativarFuncionario };
