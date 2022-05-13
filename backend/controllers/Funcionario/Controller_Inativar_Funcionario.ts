import { Request, Response } from "express";
import { ServiceInativarFuncionario } from "../../services/Funcionario/Service_Inativar_Funcionario";


class ControllerInativarFuncionario {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
      const serviceInativarFuncionario = new ServiceInativarFuncionario()
      const funcionario = await serviceInativarFuncionario.execute(id)
      return response.status(200).json(funcionario)
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerInativarFuncionario }