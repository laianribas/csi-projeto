import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import 'dotenv/config'

interface IJwt {
  funcionario: {
    nome: string;
    id: string;
  };
  request: Request;
  response: Response;
}

function gerarToken({ funcionario, request, response }: IJwt) {
  const token = jwt.sign({
    nome: funcionario.nome,
    id: funcionario.id
  }, process.env.JWT_KEY as string)

  response.status(200).json({
    message: 'Você está autenticado',
    token: token,
    userId: funcionario.id
  })
}

export { gerarToken }