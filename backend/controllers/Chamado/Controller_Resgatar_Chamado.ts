import { Request, Response } from "express";
import { ServiceResgatarChamado } from "../../services/Chamado/Service_Resgatar_Chamado";

class ControllerResgatarChamado {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
      const serviceResgatarChamado = new ServiceResgatarChamado()
      const Chamado = await serviceResgatarChamado.execute(id)
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

export { ControllerResgatarChamado };
