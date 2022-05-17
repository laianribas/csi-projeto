import { Request, Response } from "express";
import { ServiceResgatarTodosFuncionarios } from "../../services/Funcionario/Service_Resgatar_Todos_Funcionarios";

class ControllerResgatarTodosFuncionarios {
  async handle(request: Request, response: Response) {
    try {
      const serviceResgatarTodosFuncionarios = new ServiceResgatarTodosFuncionarios()
      const funcionarios = await serviceResgatarTodosFuncionarios.execute()
      if (funcionarios) {
        return response.status(201).json(funcionarios)
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerResgatarTodosFuncionarios };
