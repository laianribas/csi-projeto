import { prisma } from '../../utils/db.server'

class ServiceResgatarTodosSetores {
  async execute(): Promise<any> {
    const setores = await prisma.setor.findMany();
    return setores
  }
}

export { ServiceResgatarTodosSetores };
