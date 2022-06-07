import { Request, Response } from 'express'
import { ServiceCadastroSetor } from '../../services/Setor/Service_Cadastrar_Setor'

class ControllerCadastroSetor {
  async handle(request: Request, response: Response) {
    const serviceCadastroSetor = new ServiceCadastroSetor()
    const { nome, descricao, ramal } = request.body
    if (!nome) {
      return response.status(400).json({ message: 'O nome do setor deve ser informado!' })
    }
    try {
      const Setor = await serviceCadastroSetor.execute({ nome, descricao, ramal })
      if (Setor) {
        return response.status(201).json({ Setor: Setor })
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      response.status(500).json({ Error: error })
    }
  }
}

export { ControllerCadastroSetor }

