import { Request, Response } from 'express'
import { ServiceCadastroSetor } from '../../services/Setor/Service_Cadastrar_Setor'

class ControllerCadastroSetor {
  async handle(request: Request, response: Response) {
    const serviceCadastroSetor = new ServiceCadastroSetor()
    const { nome, descricao, ramal } = request.body
    const setor = await serviceCadastroSetor.execute({ nome, descricao, ramal })
    return response.status(201).json(setor)

  }
}

export { ControllerCadastroSetor }
