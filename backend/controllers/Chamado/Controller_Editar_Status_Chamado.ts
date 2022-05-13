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
      const chamado = await serviceEditarStatusChamado.execute(id, status)
      return response.status(200).json(chamado)
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerEditarStatusChamado }