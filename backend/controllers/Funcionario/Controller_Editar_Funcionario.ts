import 'dotenv/config';
import { Request, Response } from "express";
import { SHA512 } from "../../helpers/sha512";
import { ServiceEditarFuncionario } from '../../services/Funcionario/Service_Editar_Funcionario';

interface IData {
  nome: string,
  cargoId: string,
  senha: string,
  primeiro_acesso: string,
  campus: string,
}

class ControllerEditarFuncionario {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { nome, cargoId, senha, primeiro_acesso, campus } = request.body
    let data = {} as IData
    if (nome) {
      data.nome = nome
    }
    if (cargoId) {
      data.cargoId = cargoId
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
      if (funcionario) {
        return response.status(201).json(funcionario)
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerEditarFuncionario };
