import { Request, Response } from "express";
import { ServiceResgatarTodosSetores } from "../../services/Setor/Service_Resgatar_Todos_Setores";

class ControllerResgatarTodosSetores {
  async handle(request: Request, response: Response) {
    try {
      const serviceResgatarTodosSetores = new ServiceResgatarTodosSetores()
      const Setores = await serviceResgatarTodosSetores.execute()
      if (Setores) {
        return response.status(201).json({ Setores: Setores })
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerResgatarTodosSetores };

