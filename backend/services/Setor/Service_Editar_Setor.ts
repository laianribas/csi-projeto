import { PrismaClient } from "@prisma/client";

class ServiceEditarSetor {
  async execute(id: number, data: object): Promise<any> {
    if (id && data) {
      const prisma = new PrismaClient()
      const setor = await prisma.setor.update({
        where: {
          id: id
        }, data: data
      })
      return setor
    }
    return null
  }
}

export { ServiceEditarSetor };
