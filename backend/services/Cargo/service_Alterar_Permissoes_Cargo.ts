import { prisma } from './../../utils/db.server';

class ServiceAlterarPermissoesCargo {
  async execute(id: number, permissoes: { id: number }[]): Promise<any> {
    if (id && permissoes) {
      const cargo = await prisma.cargo.update({
        where: { id: id },
        data: {
          permissao: {
            deleteMany: {},
            create: permissoes.map(permissao => ({
              permissao: {
                connect: {
                  id: permissao.id
                }
              }
            }))
          }
        },
        include: {
          permissao: true
        }
      })
      return cargo
    } else if (permissoes.length === 0) {
      const cargo = await prisma.cargo.update({
        where: { id: id },
        data: {
          permissao: {
            deleteMany: {},
          }
        },
        include: {
          permissao: true
        }
      })
      return cargo
    }
    return null
  }
}

export { ServiceAlterarPermissoesCargo };
