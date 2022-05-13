import 'dotenv/config';
import { Request, Response } from "express";
import { SHA512 } from "../../helpers/sha512";
import { ServiceEditarFuncionario } from '../../services/Funcionario/Service_Editar_Funcionario';

interface IData {
  nome: string,
  nivel_acesso: string,
  senha: string,
  primeiro_acesso: string,
  campus: string,
}

class ControllerEditarFuncionario {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { nome, nivel_acesso, senha, primeiro_acesso, campus } = request.body
    let data = {} as IData
    if (nome) {
      data.nome = nome
    }
    if (nivel_acesso) {
      data.nivel_acesso = nivel_acesso
    }
    if (senha) {
      data.senha = SHA512(senha, process.env.SECRET_KEY as string).hash2
    }
    if (primeiro_acesso) {
      data.primeiro_acesso = primeiro_acesso
    }
    if (campus) {
      data.campus = campus
    }
    try {
      const serviceEditarFuncionario = new ServiceEditarFuncionario()
      const funcionario = await serviceEditarFuncionario.execute(id, data)
      return response.status(200).json(funcionario)
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerEditarFuncionario }