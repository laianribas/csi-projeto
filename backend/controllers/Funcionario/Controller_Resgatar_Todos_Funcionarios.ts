import { Request, Response } from "express";
import { ServiceResgatarTodosFuncionarios } from "../../services/Funcionario/Service_Resgatar_Todos_Funcionarios";

class ControllerResgatarTodosFuncionarios {
  async handle(request: Request, response: Response) {
    try {
      const serviceResgatarTodosFuncionarios = new ServiceResgatarTodosFuncionarios()
      const funcionarios = await serviceResgatarTodosFuncionarios.execute()
      return response.status(200).json(funcionarios)
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerResgatarTodosFuncionarios };
