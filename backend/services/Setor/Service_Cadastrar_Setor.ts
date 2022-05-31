import { prisma } from '../../utils/db.server'
interface ISetor {
  nome: string,
  descricao: string,
  ramal: string
}

class ServiceCadastroSetor {
  async execute({ nome, descricao, ramal }: ISetor): Promise<any> {
    if (nome && descricao && ramal) {
      const setor = prisma.setor.create({
        data: {
          nome,
          ramal,
          descricao,
          ativo: true,
        }
      })
      return setor
    }
    return null
  }
}

export { ServiceCadastroSetor }

