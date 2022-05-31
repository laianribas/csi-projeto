import { prisma } from '../../utils/db.server'
class ServiceResgatarTodosChamados {
  async execute(): Promise<any> {
    const chamados = await prisma.chamado.findMany({
      include: {
        status: {
          select: {
            status: {
              select: {
                descricao: true,
              }
            }
          }
        }
      }
    });
    return chamados
  }
}

export { ServiceResgatarTodosChamados };
