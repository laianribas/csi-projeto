import { prisma } from '../../utils/db.server'
class ServiceResgatarChamado {
  async execute(id: string): Promise<any> {
    if (id) {
      const chamado = await prisma.chamado.findUnique({
        where: {
          id: id
        },
        include: {
          funcionario: {
            select: {
              id: true,
              nome: true,
              cargo: true,
              campus: true,
              setores: {
                include: {
                  setor: true
                }
              }
            }
          },
          setor: true,
          status: {
            select: {
              createdAt: true,
              status: true
            }
          }
        }
      })
      return chamado
    }
    return null
  }
}

export { ServiceResgatarChamado };
