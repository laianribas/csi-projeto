import 'dotenv/config';
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { obterToken } from "../../helpers/obterToken";
import { ServiceResgatarFuncionario } from '../../services/Funcionario/Service_Resgatar_Funcionario';

interface IDecoded {
  nome: string,
  id: string
  iat: number
}

class CheckLogin {
  async handle(request: Request, response: Response) {
    let usuarioAtual
    if (request.headers.authorization) {
      const serviceResgatarFuncionario = new ServiceResgatarFuncionario()
      const token = obterToken(request)
      const decoded = jwt.verify(token as string, process.env.JWT_KEY as string) as IDecoded
      usuarioAtual = await serviceResgatarFuncionario.execute(decoded.id)
      if (usuarioAtual) {
        if (!usuarioAtual.ativo) {
          return response.status(400).json({
            message: 'O funcionario está inativo!'
          })
        }
        usuarioAtual.senha = ''
      }
    } else {
      usuarioAtual = null
    }
    return response.status(200).json(usuarioAtual)
  }
}

export { CheckLogin };

