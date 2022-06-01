import { Request, Response } from "express";
import { ServiceResgatarFuncionario } from "../../services/Funcionario/Service_Resgatar_Funcionario";

class ControllerResgatarFuncionario {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
      const serviceResgatarFuncionario = new ServiceResgatarFuncionario()
      const funcionario = await serviceResgatarFuncionario.execute(id)
      if (funcionario) {
        return response.status(200).json(funcionario)
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerResgatarFuncionario };
