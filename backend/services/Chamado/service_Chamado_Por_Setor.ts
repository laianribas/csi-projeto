import { prisma } from '../../utils/db.server'
class ServiceChamadoPorSetor {
  async execute(id: number[]) {
    if (id) {
      const chamado = await prisma.chamado.findMany({
        where: {
          setorId: {
            in: id
          }
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

export { ServiceChamadoPorSetor }