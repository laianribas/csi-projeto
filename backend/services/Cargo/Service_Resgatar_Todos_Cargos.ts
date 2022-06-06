import { prisma } from './../../utils/db.server';


class ServiceResgatarTodosCargos {
  async execute(): Promise<any> {
    const cargo = await prisma.cargo.findMany({
      orderBy: {
        id: 'asc'
      }
    })
    return cargo
  }
}

export { ServiceResgatarTodosCargos }