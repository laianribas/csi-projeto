import { PrismaClient } from "@prisma/client";

class ServiceResgatarSetor {
  async execute(id: string): Promise<any> {
    if (id) {
      const prisma = new PrismaClient()
      const setor = await prisma.setor.findUnique({ where: { id: id } })
      return setor
    }
    return null
  }
}

export { ServiceResgatarSetor };
