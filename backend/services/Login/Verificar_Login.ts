import { PrismaClient } from "@prisma/client";

interface ILogin {
  login: string;
}

class VerificarLogin {
  async execute({ login }: ILogin) {
    const prisma = new PrismaClient()
    const funcionario = await prisma.funcionario.findFirst({ where: { login: login } })
    return funcionario
  }
}

export { VerificarLogin };
