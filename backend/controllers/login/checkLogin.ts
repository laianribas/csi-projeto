import 'dotenv/config';
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { obterToken } from "../../helpers/obterToken";
import { ServiceResgatarFuncionario } from '../../services/Funcionario/Service_Resgatar_Funcionario';

interface IDecoded {
  nome: string,
  id: string
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
        usuarioAtual.senha = ''
      }
    } else {
      usuarioAtual = null
    }
    response.status(200).json(usuarioAtual)
  }
}

export { CheckLogin };
