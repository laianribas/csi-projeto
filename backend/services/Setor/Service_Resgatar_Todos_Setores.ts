import { prisma } from '../../utils/db.server'

class ServiceResgatarTodosSetores {
  async execute(): Promise<any> {
    const setores = await prisma.setor.findMany({
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
    });
    return setores
  }
}

export { ServiceResgatarTodosSetores };
