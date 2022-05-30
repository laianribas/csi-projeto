import { Request, Response } from "express";
import { obterFuncionarioPorToken } from "../../helpers/obterFuncionarioPorToken";
import { obterToken } from "../../helpers/obterToken";
import { ServiceCadastrarChamado } from "../../services/Chamado/Service_Cadastrar_Chamado";
import { ServiceResgatarSetor } from "../../services/Setor/Service_Resgatar_Setor";

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
    const serviceResgatarSetor = new ServiceResgatarSetor()
    const setor = await serviceResgatarSetor.execute(setorId)
    if (!setor) {
      return response.status(400).json({ message: 'Setor não localizado!' })
    }
    try {
      const token = obterToken(request)
      const funcionario = await obterFuncionarioPorToken(response, token as string)
      const serviceCadastrarChamado = new ServiceCadastrarChamado()
      const chamado = await serviceCadastrarChamado.execute({ area, descricao, destinatario, statusIds: [{ id: 1 }], tombo, avaliacao, funcionarioId: funcionario.id, setorId: setor.id })
      if (chamado) {
        return response.status(201).json(chamado)
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }

  }
}

export { ControllerCadastrarChamado };
