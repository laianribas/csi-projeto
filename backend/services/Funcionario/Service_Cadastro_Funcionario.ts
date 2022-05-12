import { PrismaClient } from "@prisma/client";
interface IFuncionario {
  nivel_acesso: string,
  login: string,
  campus: string,
  senha: string,
  nome: string
  setores: { id: string }[]
}

class ServiceCadastroFuncionario {
  async execute({ nivel_acesso, login, campus, senha, nome, setores }: IFuncionario): Promise<any> {
    const prisma = new PrismaClient();
    const funcionario = await prisma.funcionario.create({
      data: {
        primeiro_acesso: true,
        ativo: true,
        nivel_acesso,
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
}

export { ServiceCadastroFuncionario };

