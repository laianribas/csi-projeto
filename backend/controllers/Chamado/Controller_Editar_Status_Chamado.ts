import { Request, Response } from "express";
import { ServiceEditarStatusChamado } from "../../services/Chamado/Service_Editar_Status_Chamado";

class ControllerEditarStatusChamado {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { status } = request.body
    if (!status) {
      return response.status(400).json({ message: 'O status do chamado do chamado deve ser informado!' })
    }
    try {
      const serviceEditarStatusChamado = new ServiceEditarStatusChamado()
      const Chamado = await serviceEditarStatusChamado.execute(id, status)
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

export { ControllerEditarStatusChamado };
