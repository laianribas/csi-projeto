import { prisma } from '../../utils/db.server'
interface ILogin {
  login: string;
}

class VerificarLogin {
  async execute({ login }: ILogin) {
    if (login) {
      const funcionario = await prisma.funcionario.findFirst({ where: { login: login } })
      return funcionario
    }
    return null
  }
}

export { VerificarLogin };
