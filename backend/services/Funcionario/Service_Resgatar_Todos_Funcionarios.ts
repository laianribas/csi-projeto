import { prisma } from '../../utils/db.server'
class ServiceResgatarTodosFuncionarios {
  async execute(): Promise<any> {
    const funcionarios = await prisma.funcionario.findMany({
      include: {
        chamados: {
          select: {
            area: true,
            descricao: true,
            destinatario: true,
            setor: true,
            tombo: true,
            status: {
              select: {
                createdAt: true,
                status: true
              }
            }
          }
        },
        setores: {
          select: {
            setor: true
          }
        }
      }
    });
    return funcionarios
  }
}

export { ServiceResgatarTodosFuncionarios };
