import { Request, Response } from "express";
import { ServiceResgatarTodosSetores } from "../../services/Setor/Service_Resgatar_Todos_Setores";

class ControllerResgatarTodosSetores {
  async handle(request: Request, response: Response) {
    try {
      const serviceResgatarTodosSetores = new ServiceResgatarTodosSetores()
      const setores = await serviceResgatarTodosSetores.execute()
      return response.status(200).json(setores)
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerResgatarTodosSetores };
