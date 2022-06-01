import { prisma } from '../../utils/db.server'
class ServiceResgatarTodosChamados {
  async execute(): Promise<any> {
    const chamados = await prisma.chamado.findMany({
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
    });
    return chamados
  }
}

export { ServiceResgatarTodosChamados };
