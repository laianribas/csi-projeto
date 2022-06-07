import { prisma } from './../../utils/db.server';


class ServiceResgatarCargo {
  async execute(id: number): Promise<any> {
    if (id) {
      const cargo = await prisma.cargo.findUnique({
        where: {
          id: id
        },
        include: {
          permissoes: {
            select: {
              permissao: true,
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