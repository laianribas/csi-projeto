import { Request, Response } from "express";
import { ServiceResgatarTodosSetores } from "../../services/Setor/Service_Resgatar_Todos_Setores";

class ControllerResgatarTodosSetores {
  async handle(request: Request, response: Response) {
    try {
      const serviceResgatarTodosSetores = new ServiceResgatarTodosSetores()
      const setores = await serviceResgatarTodosSetores.execute()
      if (setores) {
        return response.status(201).json(setores)
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerResgatarTodosSetores };
