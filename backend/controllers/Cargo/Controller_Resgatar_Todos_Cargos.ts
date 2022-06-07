import { Request, Response } from "express";
import { ServiceResgatarTodosCargos } from "../../services/Cargo/Service_Resgatar_Todos_Cargos";

class ControllerResgatarTodosCargos {
  async handle(request: Request, response: Response) {
    try {
      const serviceResgatarTodosCargos = new ServiceResgatarTodosCargos()
      const Cargos = await serviceResgatarTodosCargos.execute()
      if (Cargos) {
        return response.status(200).json({ Cargos: Cargos })
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerResgatarTodosCargos };

