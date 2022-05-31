import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { obterToken } from "../helpers/obterToken";

interface IUsuario {
  nome: string,
  id: string
  iat: number
}


function verificarToken(request: Request, response: Response, next: NextFunction) {
  if (!request.headers.authorization) {
    return response.status(401).json({ message: 'Acesso negado!' })
  }
  const token = obterToken(request)

  if (!token) {
    return response.status(401).json({ message: 'Acesso negado!' })
  }

  try {
    const usuarioVerificado = jwt.verify(token as string, process.env.JWT_KEY as string)
    request.user = usuarioVerificado as IUsuario
    next()
  } catch (error) {
    return response.status(400).json({ message: 'Token inválido!' })
  }
}

export { verificarToken };

