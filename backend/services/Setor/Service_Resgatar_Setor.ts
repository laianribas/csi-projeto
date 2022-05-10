import { PrismaClient } from "@prisma/client";

class ServiceResgatarSetor {
  async execute(id: string): Promise<any> {
    const prisma = new PrismaClient()
    const setor = await prisma.setor.findUnique({ where: { id: id } })
    return setor
  }
}

export { ServiceResgatarSetor }