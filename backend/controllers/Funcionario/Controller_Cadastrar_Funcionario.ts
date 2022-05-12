import 'dotenv/config'
import { Request, Response } from 'express'
import { gerarLogin } from '../../helpers/gerarLogin'
import { gerarSenha } from '../../helpers/gerarSenha'
import { ServiceCadastroFuncionario } from '../../services/Funcionario/Service_Cadastro_Funcionario'

class ControllerCadastrarFuncionario {
  async handle(request: Request, response: Response) {
    const serviceCadastroFuncionario = new ServiceCadastroFuncionario()
    const { campus, nivel_acesso, nome, setores } = request.body
    if (!nome) {
      return response
        .status(400)
        .json({ message: 'O nome do funcionário deve ser informado!' })
    }
    if (!campus) {
      return response
        .status(400)
        .json({ message: 'O campus do funcionário deve ser informado!' })
    }
    if (!nivel_acesso) {
      return response.status(400).json({
        message: 'O nível de acesso do funcionário deve ser informado!'
      })
    }
    if (!setores || setores.length === 0) {
      return response.status(400).json({
        message: 'O funcionário deve fazer parte de ao menos um setor!'
      })
    }

    const login = await gerarLogin({ nome })
    const senha = gerarSenha({ nome })

    const funcionario = await serviceCadastroFuncionario.execute({
      campus,
      login,
      nivel_acesso,
      nome,
      senha,
      setores
    })
    return response.status(201).json(funcionario)
  }
}

export { ControllerCadastrarFuncionario }
