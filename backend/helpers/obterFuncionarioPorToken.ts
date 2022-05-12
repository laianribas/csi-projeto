import 'dotenv/config';
import { Response } from 'express';
import jwt from "jsonwebtoken";
import { ServiceResgatarFuncionario } from "../services/Funcionario/Service_Resgatar_Funcionario";

interface IDecoded {
  nome: string,
  id: string
  iat: number
}

async function obterFuncionarioPorToken(response: Response, token: string) {
  if (!token) {
    return response.status(400).json({ message: 'Acesso negado!' })
  }
  const serviceResgatarFuncionario = new ServiceResgatarFuncionario()
  const decoded = jwt.verify(token, process.env.JWT_KEY as string)
  const { id } = decoded as IDecoded
  const funcionario = await serviceResgatarFuncionario.execute(id)
  return funcionario
}

export { obterFuncionarioPorToken };

