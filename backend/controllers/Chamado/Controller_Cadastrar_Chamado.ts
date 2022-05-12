import { Request, Response } from "express";
import { obterFuncionarioPorToken } from "../../helpers/obterFuncionarioPorToken";
import { obterToken } from "../../helpers/obterToken";
import { ServiceCadastrarChamado } from "../../services/Chamado/Service_Cadastrar_Chamado";

class ControllerCadastrarChamado {
  async handle(request: Request, response: Response) {
    const { area, descricao, destinatario, tombo, avaliacao, setorId } = request.body
    if (!area) {
      return response.status(400).json({ message: 'A área do chamado deve ser informada!' })
    }
    if (!descricao) {
      return response.status(400).json({ message: 'A descrição do chamado deve ser informada!' })
    }
    if (!destinatario) {
      return response.status(400).json({ message: 'O destinatário do chamado deve ser informado!' })
    }
    if (!tombo) {
      return response.status(400).json({ message: 'O tombo do equipamento do chamado deve ser informado!' })
    }
    if (!setorId) {
      return response.status(400).json({ message: 'O setor do chamado deve ser informado!' })
    }
    try {
      const token = obterToken(request)
      const funcionario = await obterFuncionarioPorToken(response, token as string)
      const serviceCadastrarChamado = new ServiceCadastrarChamado()
      const chamado = await serviceCadastrarChamado.execute({ area, descricao, destinatario, status: 'Em aberto', tombo, avaliacao, funcionarioId: funcionario.id, setorId })
      return response.status(201).json(chamado)
    } catch (error) {
      return response.status(500).json({ error: error })
    }

  }
}

export { ControllerCadastrarChamado }