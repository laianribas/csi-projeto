import { PrismaClient } from "@prisma/client"
interface IChamado {
  area: string,
  descricao: string,
  destinatario: string,
  statusIds: { id: Number }[],
  tombo: string,
  avaliacao: string,
  funcionarioId: string,
  setorId: number,
}

class ServiceCadastrarChamado {
  async execute({ area, descricao, destinatario, statusIds, tombo, avaliacao, funcionarioId, setorId }: IChamado): Promise<any> {
    if (area && descricao && destinatario && statusIds && tombo && funcionarioId && setorId) {
      const prisma = new PrismaClient()
      const chamado = await prisma.chamado.create({
        data: {
          area,
          descricao,
          destinatario,
          status: {
            create: statusIds.map(statusId => ({
              status: {
                connect: statusId.id
              }
            }))
          },
          tombo,
          avaliacao,
          funcionarioId,
          setorId
        }
      })
      return chamado
    }
    return null
  }
}

export { ServiceCadastrarChamado }

