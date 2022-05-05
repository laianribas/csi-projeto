import { PrismaClient } from "@prisma/client"
interface ISetor {
  nome: string,
  descricao: string,
  ramal: string
}

class ServiceCadastroSetor {
  async execute({ nome, descricao, ramal }: ISetor) {
    const prisma = new PrismaClient()
    const setor = prisma.setor.create({
      data: {
        nome,
        ativo: true,
        descricao,
        ramal
      }
    })
    console.log(setor)
    return setor
  }
}

export { ServiceCadastroSetor }
