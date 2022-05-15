import { NextFunction, Request, Response } from "express";
import { obterFuncionarioPorToken } from "../helpers/obterFuncionarioPorToken";
import { obterToken } from "../helpers/obterToken";

async function verificarNivelAcesso(request: Request, response: Response, next: NextFunction) {
  const token = obterToken(request)
  const funcionario = await obterFuncionarioPorToken(response, token as string);
  if (funcionario?.nivel_acesso !== 'Administrador') {
    return response.status(401).json({ message: 'Nível de acesso insuficiente!' })
  }
  next()
}

export { verificarNivelAcesso }