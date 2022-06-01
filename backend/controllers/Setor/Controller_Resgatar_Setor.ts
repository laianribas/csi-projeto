import { Request, Response } from "express";
import { ServiceResgatarSetor } from "../../services/Setor/Service_Resgatar_Setor";

class ControllerResgatarSetor {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
      const serviceResgatarSetor = new ServiceResgatarSetor()
      const setor = await serviceResgatarSetor.execute(parseInt(id))
      if (setor) {
        return response.status(200).json(setor)
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerResgatarSetor };
