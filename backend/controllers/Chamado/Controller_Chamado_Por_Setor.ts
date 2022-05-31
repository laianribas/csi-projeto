import { Request, Response } from "express";
import { obterFuncionarioPorToken } from "../../helpers/obterFuncionarioPorToken";
import { obterToken } from "../../helpers/obterToken";
import { ServiceChamadoPorSetor } from "../../services/Chamado/service_Chamado_Por_Setor";

class ControllerChamadoPorSetor {
  async handle(request: Request, response: Response) {
    try {
      let setoresId: any[] = []
      const token = obterToken(request)
      const funcionario = await obterFuncionarioPorToken(response, token as string)
      const serviceChamadoPorSetor = new ServiceChamadoPorSetor()
      const { setores } = funcionario
      setores.map((setor: { setorId: any; }) => setoresId.push(setor.setorId))
      const chamados = await serviceChamadoPorSetor.execute(setoresId)
      if (chamados) {
        return response.status(201).json(chamados)
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerChamadoPorSetor };
