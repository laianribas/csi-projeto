import { Request, Response } from "express";
import { obterFuncionarioPorToken } from "../../helpers/obterFuncionarioPorToken";
import { obterToken } from "../../helpers/obterToken";
import { ServiceChamadoPorCampus } from "../../services/Chamado/service_Chamado_Por_Campus";
import { ServiceFuncionarioPorCampus } from "../../services/Funcionario/service_Funcionario_Por_campus";

class ControllerChamadoPorCampus {
  async handle(request: Request, response: Response) {
    try {
      const serviceChamadoPorCampus = new ServiceChamadoPorCampus()
      const serviceFuncionarioPorCampus = new ServiceFuncionarioPorCampus()
      const token = obterToken(request)
      const usuarioAtual = await obterFuncionarioPorToken(response, token as string)
      const funcionarios = await serviceFuncionarioPorCampus.execute(usuarioAtual?.campus)
      const chamados = await serviceChamadoPorCampus.execute(funcionarios)
      if (chamados) {
        return response.status(200).json(chamados)
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerChamadoPorCampus };

