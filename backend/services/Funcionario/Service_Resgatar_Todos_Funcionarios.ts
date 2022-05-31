import { prisma } from '../../utils/db.server'
class ServiceResgatarTodosFuncionarios {
  async execute(): Promise<any> {
    const funcionarios = await prisma.funcionario.findMany();
    return funcionarios
  }
}

export { ServiceResgatarTodosFuncionarios };
