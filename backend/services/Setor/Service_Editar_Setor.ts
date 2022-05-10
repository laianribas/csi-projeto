import { PrismaClient } from "@prisma/client";

class ServiceEditarSetor {
  async execute(id: string, data: object): Promise<any> {
    const prisma = new PrismaClient()
    const setor = await prisma.setor.update({
      where: {
        id: id
      }, data: data
    })
    return setor
  }
}

export { ServiceEditarSetor }