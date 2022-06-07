import { prisma } from './../../utils/db.server';

class ServiceAlterarPermissoesCargo {
  async execute(id: number, permissoes: { id: number }[]): Promise<any> {
    if (id && permissoes) {
      const cargo = await prisma.cargo.update({
        where: { id: id },
        data: {
          permissoes: {
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
          permissoes: true
        }
      })
      return cargo
    } else if (permissoes.length === 0) {
      const cargo = await prisma.cargo.update({
        where: { id: id },
        data: {
          permissoes: {
            deleteMany: {},
          }
        },
        include: {
          permissoes: true
        }
      })
      return cargo
    }
    return null
  }
}

export { ServiceAlterarPermissoesCargo };
