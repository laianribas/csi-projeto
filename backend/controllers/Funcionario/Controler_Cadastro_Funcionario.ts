import { Request, Response } from 'express';
import { ServiceCadastroFuncionario } from '../../services/Funcionario/Service_Cadastro_Funcionario'

class ControllerCadastroFuncionario {
  async handle(request: Request, response: Response) {
    const serviceCadastroFuncionario = new ServiceCadastroFuncionario();
    const { campus, login, nivel_acesso, nome, senha, setores } = request.body
    const funcionario = serviceCadastroFuncionario.execute({
      ativo: true,
      campus,
      login,
      nivel_acesso,
      nome,
      primeiro_acesso: true,
      senha,
      setores
    })
    return response.status(201).json(funcionario)
  }
}

export { ControllerCadastroFuncionario }