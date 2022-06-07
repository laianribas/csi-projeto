import { Request, Response } from "express";
import { ServiceEditarChamado } from '../../services/Chamado/Service_Editar_Chamado';

interface IData {
  destinatario: string,
  area: string,
  descricao: string,
  tombo: string,
  avaliacao: string,
}

class ControllerEditarChamado {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { destinatario, area, descricao, tombo, avaliacao } = request.body
    let data = {} as IData
    if (destinatario) {
      data.destinatario = destinatario
    }
    if (area) {
      data.area = area
    }
    if (descricao) {
      data.descricao = descricao
    }
    if (tombo) {
      data.tombo = tombo
    }
    if (avaliacao) {
      data.avaliacao = avaliacao
    }
    try {
      const serviceEditarChamado = new ServiceEditarChamado()
      const Chamado = await serviceEditarChamado.execute(id, data)
      if (Chamado) {
        return response.status(201).json({ Chamado: Chamado })
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerEditarChamado };
