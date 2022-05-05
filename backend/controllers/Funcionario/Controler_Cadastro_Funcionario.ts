import { Request, Response } from 'express'
import { ServiceCadastroFuncionario } from '../../services/Funcionario/Service_Cadastro_Funcionario'
import { gerarLogin } from '../../helpers/gerarLogin'
import { gerarSenha, loginFuncionario } from '../../helpers/gerarSenha'

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
    const senha = gerarSenha({ nome: 'laian123' })
    console.log(loginFuncionario('laian123', 'secret', '249ce452799ad6495234628713e319fe962756d4764fbe3ff9b86daf5844433b3bed409158e5c09effbbe10cac2d1dc56396565e3a15a55b49892a089bf33b6e'))

    console.log('login:', login)
    console.log('senha:', senha)
    // senha = (auxiliarLogin[0] + '.' + auxiliarLogin[auxiliarLogin.length - 1]).toLowerCase();
    // const algoritmo = 'aes-256-cbc';
    // const vetorInicial = crypto.randomBytes(16)
    // const chaveDeSeguranca = crypto.randomBytes(32)
    // const cipher = crypto.createCipheriv(algoritmo, chaveDeSeguranca, vetorInicial)
    // let senhaEncriptada = cipher.update(senha, "utf-8", "hex")
    // senhaEncriptada += cipher.final("hex");
    // console.log('senha criptografada:', senhaEncriptada)
    // const decipher = crypto.createDecipheriv(algoritmo, chaveDeSeguranca, vetorInicial);
    // let decryptedData = decipher.update(senhaEncriptada, "hex", "utf-8");
    // decryptedData += decipher.final("utf8");
    // console.log('senha descriptografada:', decryptedData)

    // const funcionario = await serviceCadastroFuncionario.execute({
    //   campus,
    //   login,
    //   nivel_acesso,
    //   nome,
    //   senha,
    //   setores
    // })
    // return response.status(201).json(funcionario)
  }
}

export { ControllerCadastroFuncionario }