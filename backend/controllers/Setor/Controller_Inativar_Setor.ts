import { Request, Response } from "express";
import { ServiceInativarSetor } from "../../services/Setor/Service_Inativar_Setor";


class ControllerInativarSetor {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
      const serviceInativarSetor = new ServiceInativarSetor()
      const setor = await serviceInativarSetor.execute(id)
      return response.status(200).json(setor)
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerInativarSetor }