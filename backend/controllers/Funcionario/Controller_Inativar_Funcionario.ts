import { Request, Response } from "express";
import { ServiceInativarFuncionario } from "../../services/Funcionario/Service_Inativar_Funcionario";


class ControllerInativarFuncionario {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
      const serviceInativarFuncionario = new ServiceInativarFuncionario()
      const funcionario = await serviceInativarFuncionario.execute(id)
      if (funcionario) {
        return response.status(201).json(funcionario)
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerInativarFuncionario }