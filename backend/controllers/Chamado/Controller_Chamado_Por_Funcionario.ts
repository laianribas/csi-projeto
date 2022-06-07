import { Request, Response } from "express";
import { obterFuncionarioPorToken } from "../../helpers/obterFuncionarioPorToken";
import { obterToken } from "../../helpers/obterToken";
import { ServiceChamadoPorFuncionario } from "../../services/Chamado/service_Chamado_Por_Funcionario";

class ControllerChamadoPorFuncionario {
  async handle(request: Request, response: Response) {
    try {
      const token = obterToken(request)
      const funcionario = await obterFuncionarioPorToken(response, token as string)
      const serviceChamadoPorFuncionario = new ServiceChamadoPorFuncionario()
      const Chamados = await serviceChamadoPorFuncionario.execute(funcionario?.id)
      if (Chamados) {
        return response.status(201).json({ Chamado: Chamados })
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerChamadoPorFuncionario };
