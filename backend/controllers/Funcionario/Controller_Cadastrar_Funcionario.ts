import { Request, Response } from 'express'
import { gerarLogin } from '../../helpers/gerarLogin'
import { gerarSenha } from '../../helpers/gerarSenha'
import { ServiceCadastroFuncionario } from '../../services/Funcionario/Service_Cadastro_Funcionario'

class ControllerCadastrarFuncionario {
  async handle(request: Request, response: Response) {
    const serviceCadastroFuncionario = new ServiceCadastroFuncionario()
    const { campus, cargoId, nome, setores } = request.body
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
    if (!cargoId) {
      return response.status(400).json({
        message: 'O cargo do funcionário deve ser informado!'
      })
    }
    if (!setores || setores.length === 0) {
      return response.status(400).json({
        message: 'O funcionário deve fazer parte de ao menos um setor!'
      })
    }
    try {
      const login = await gerarLogin({ nome })
      const senha = gerarSenha({ nome })

      const Funcionario = await serviceCadastroFuncionario.execute({
        campus,
        login,
        cargoId,
        nome,
        senha,
        setores
      })
      if (Funcionario) {
        return response.status(201).json({ Funcionario: Funcionario })
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }

  }
}

export { ControllerCadastrarFuncionario }

