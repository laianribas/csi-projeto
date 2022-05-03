import { PrismaClient } from "@prisma/client";
interface IFuncionario {
  primeiro_acesso: boolean,
  ativo: boolean,
  nivel_acesso: string,
  login: string,
  campus: string,
  senha: string,
  nome: string
  setores: string[]
}

class ServiceCadastroFuncionario {
  async execute({ primeiro_acesso, ativo, nivel_acesso, login, campus, senha, nome, setores }: IFuncionario) {
    const prisma = new PrismaClient();
    const funcionario = await prisma.funcionario.create({
      data: {
        primeiro_acesso,
        ativo,
        nivel_acesso,
        login,
        campus,
        senha,
        nome,
        setores: {
          create: setores.map(setorId => ({
            setor: {
              connect: {
                id: setorId
              }
            }
          }))
        }
      }
    })
    console.log(funcionario)
    return funcionario
  }
}

export { ServiceCadastroFuncionario }

