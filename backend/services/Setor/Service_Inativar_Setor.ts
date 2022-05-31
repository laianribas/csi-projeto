import { prisma } from '../../utils/db.server'

class ServiceInativarSetor {
  async execute(id: number): Promise<any> {
    if (id) {
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
