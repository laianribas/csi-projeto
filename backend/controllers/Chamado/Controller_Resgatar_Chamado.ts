import { Request, Response } from "express";
import { ServiceResgatarChamado } from "../../services/Chamado/Service_Resgatar_Chamado";

class ControllerResgatarChamado {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
      const serviceResgatarChamado = new ServiceResgatarChamado()
      const chamado = await serviceResgatarChamado.execute(id)
      return response.status(200).json(chamado)
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerResgatarChamado }