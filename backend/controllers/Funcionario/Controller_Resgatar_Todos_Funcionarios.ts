import { Request, Response } from "express";
import { ServiceResgatarTodosFuncionarios } from "../../services/Funcionario/Service_Resgatar_Todos_Funcionarios";

class ControllerResgatarTodosFuncionarios {
  async handle(request: Request, response: Response) {
    try {
      const serviceResgatarTodosFuncionarios = new ServiceResgatarTodosFuncionarios()
      const Funcionarios = await serviceResgatarTodosFuncionarios.execute()
      if (Funcionarios) {
        return response.status(201).json({ Funcionarios: Funcionarios })
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerResgatarTodosFuncionarios };

