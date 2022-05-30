import { PrismaClient } from "@prisma/client";

class ServiceResgatarTodosChamados {
  async execute(): Promise<any> {
    const prisma = new PrismaClient()
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
