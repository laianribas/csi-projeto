import { Request, Response } from "express";
import { ServiceResgatarCargo } from "../../services/Cargo/service_Resgatar_Cargo";

class ControllerResgatarCargo {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
      const serviceResgatarCargo = new ServiceResgatarCargo()
      const Cargo = await serviceResgatarCargo.execute(parseInt(id))
      if (Cargo) {
        return response.status(200).json({ Cargo: Cargo })
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerResgatarCargo }