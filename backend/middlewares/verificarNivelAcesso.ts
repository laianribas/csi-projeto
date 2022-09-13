import { prisma } from './../utils/db.server';
import { NextFunction, Request, Response } from "express";
import { obterFuncionarioPorToken } from "../helpers/obterFuncionarioPorToken";
import { obterToken } from "../helpers/obterToken";

async function verificarNivelAcesso(request: Request, response: Response, next: NextFunction) {
  if (request.headers.permission) {
    const token = obterToken(request)
    const funcionario = await obterFuncionarioPorToken(response, token as string)
    const permissaoDoCargo = await prisma.permissaoOnCargo.findMany({
      where: {
        cargoId: funcionario.cargoId,
        permissao: {
          id: {
            equals: +request.headers.permission as number
          }
        }
      }
    })
    if (permissaoDoCargo.length > 0) {
      next()
    } else {
      return response.status(403).json({ message: 'Nível de acesso insuficiente!' })
    }
  } else {
    return response.status(403).json({ message: 'A permissao deve ser informada!' })
  }
}

export { verificarNivelAcesso };
