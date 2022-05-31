import { prisma } from '../../utils/db.server'

interface IFuncionario {
  cargoId: number,
  login: string,
  campus: string,
  senha: string,
  nome: string
  setores: { id: number }[]
}

class ServiceCadastroFuncionario {
  async execute({ cargoId, login, campus, senha, nome, setores }: IFuncionario): Promise<any> {
    console.log(setores)
    if (cargoId && login && campus && senha && nome && setores) {
      const funcionario = await prisma.funcionario.create({
        data: {
          primeiro_acesso: true,
          ativo: true,
          cargoId,
          login,
          campus,
          senha,
          nome,
          setores: {
            create: setores.map(setorId => ({
              setor: {
                connect: {
                  id: setorId.id
                }
              }
            }))
          }
        }
      })
      return funcionario
    }
    return null
  }
}

export { ServiceCadastroFuncionario };

