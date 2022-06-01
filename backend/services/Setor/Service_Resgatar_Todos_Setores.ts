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
                setores: true
              }
            }
          }
        },
        chamados: {
          include: {
            funcionario: {
              select: {
                id: true,
                nome: true,
                cargo: true,
                campus: true,
              }
            }
          }
        }
      }
    });
    return setores
  }
}

export { ServiceResgatarTodosSetores };
