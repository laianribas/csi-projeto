import { Request, Response } from "express";
import { ServiceInativarSetor } from "../../services/Setor/Service_Inativar_Setor";


class ControllerInativarSetor {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
      const serviceInativarSetor = new ServiceInativarSetor()
      const setor = await serviceInativarSetor.execute(id)
      if (setor) {
        return response.status(201).json(setor)
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerInativarSetor }