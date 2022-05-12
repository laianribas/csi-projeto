import { PrismaClient } from "@prisma/client";
import 'dotenv/config';
import { Response } from 'express';
import jwt from "jsonwebtoken";

interface IDecoded {
  nome: string,
  id: string
  iat: number
}

async function obterFuncionarioPorToken(response: Response, token: string) {
  if (!token) {
    return response.status(400).json({ message: 'Acesso negado!' })
  }
  const prisma = new PrismaClient()
  const decoded = jwt.verify(token, process.env.JWT_KEY as string)
  const { id } = decoded as IDecoded
  const funcionario = await prisma.funcionario.findUnique({ where: { id: id } })
  return funcionario
}

export { obterFuncionarioPorToken };
