import { PrismaClient } from "@prisma/client";

class ServiceInativarSetor {
  async execute(id: string): Promise<any> {
    if (id) {
      const prisma = new PrismaClient()
      const setor = await prisma.setor.update({
        where: {
          id: id
        }, data: {
          ativo: false
        }
      })
      return setor
    }
    return null
  }
}

export { ServiceInativarSetor };
