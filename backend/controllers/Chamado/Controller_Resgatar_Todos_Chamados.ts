import { Request, Response } from "express";
import { ServiceResgatarTodosChamados } from "../../services/Chamado/Service_Resgatar_Todos_Chamados";

class ControllerResgatarTodosChamados {
  async handle(request: Request, response: Response) {
    try {
      const serviceResgatarTodosChamados = new ServiceResgatarTodosChamados()
      const chamados = await serviceResgatarTodosChamados.execute()
      return response.status(200).json(chamados)
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerResgatarTodosChamados };
