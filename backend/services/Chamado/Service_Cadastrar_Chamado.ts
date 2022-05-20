import { PrismaClient } from "@prisma/client"
interface IChamado {
  area: string,
  descricao: string,
  destinatario: string,
  status: string,
  tombo: string,
  avaliacao: string,
  funcionarioId: string,
  setorId: string,
}

class ServiceCadastrarChamado {
  async execute({ area, descricao, destinatario, status, tombo, avaliacao, funcionarioId, setorId }: IChamado): Promise<any> {
    if (area && descricao && destinatario && status && tombo && funcionarioId && setorId) {
      const prisma = new PrismaClient()
      const chamado = await prisma.chamado.create({
        data: {
          area,
          descricao,
          destinatario,
          status,
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

