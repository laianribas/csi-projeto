import { prisma } from './../../utils/db.server';


class ServiceResgatarCargo {
  async execute(id: number): Promise<any> {
    if (id) {
      const cargo = await prisma.cargo.findUnique({
        where: {
          id: id
        },
        include: {
          permissao: {
            select: {
              permissao: true,

            },
            orderBy: {
              permissaoId: 'asc',
            }
          }
        }
      })
      return cargo
    }
    return null
  }
}

export { ServiceResgatarCargo }