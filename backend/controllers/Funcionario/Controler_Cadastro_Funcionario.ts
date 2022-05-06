import { Request, Response } from 'express'
import { ServiceCadastroFuncionario } from '../../services/Funcionario/Service_Cadastro_Funcionario'
import { gerarLogin } from '../../helpers/gerarLogin'
import { gerarSenha, loginFuncionario } from '../../helpers/gerarSenha'
import 'dotenv/config'

class ControllerCadastroFuncionario {
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

    const login = gerarLogin({ nome })
    const senha = gerarSenha({ nome })
    console.log(loginFuncionario('laian@santana', '904b6a38f9717dc558b11625e7086b982f0e411b2d88e81e9d1ade496eb4f2bd2d08752c1f4f418cae4e5b5f4c201f88a35b29452a5fd71a7dfd967a75a15b91'))

    console.log('login:', login)
    console.log('senha:', senha)
    console.log(Math.random().toString().substring(2, 6));

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

export { ControllerCadastroFuncionario }