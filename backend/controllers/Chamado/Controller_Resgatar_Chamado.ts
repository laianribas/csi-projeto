import { Request, Response } from "express";
import { ServiceResgatarChamado } from "../../services/Chamado/Service_Resgatar_Chamado";

class ControllerResgatarChamado {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
      const serviceResgatarChamado = new ServiceResgatarChamado()
      const chamado = await serviceResgatarChamado.execute(id)
      if (chamado) {
        return response.status(200).json(chamado)
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerResgatarChamado }