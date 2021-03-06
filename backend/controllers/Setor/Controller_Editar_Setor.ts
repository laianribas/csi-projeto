import { Request, Response } from "express";
import { ServiceEditarSetor } from '../../services/Setor/Service_Editar_Setor';
interface IData {
  nome: string,
  ramal: string,
  descricao: string,
}

class ControllerEditarSetor {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { nome, ramal, descricao } = request.body
    let data = {} as IData
    if (nome) {
      data.nome = nome
    }
    if (ramal) {
      data.ramal = ramal
    }
    if (descricao) {
      data.descricao = descricao
    }
    try {
      const serviceEditarSetor = new ServiceEditarSetor()
      const Setor = await serviceEditarSetor.execute(parseInt(id), data)
      if (Setor) {
        return response.status(201).json({ Setor: Setor })
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerEditarSetor };
