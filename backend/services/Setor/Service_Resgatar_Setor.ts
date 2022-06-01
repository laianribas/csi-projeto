import { prisma } from '../../utils/db.server'
class ServiceResgatarSetor {
  async execute(id: number): Promise<any> {
    if (id) {
      const setor = await prisma.setor.findUnique({
        where: {
          id: id
        },
        include: {
          Funcionarios: {
            select: {
              Funcionario: {
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
              }
            }
          },
          chamados: true
        }
      })
      return setor
    }
    return null
  }
}

export { ServiceResgatarSetor };
