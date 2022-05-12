import { PrismaClient } from "@prisma/client";

class ServiceResgatarChamado {
  async execute(id: string): Promise<any> {
    const prisma = new PrismaClient()
    const chamado = await prisma.chamado.findUnique({ where: { id: id } })
    return chamado
  }
}

export { ServiceResgatarChamado };
