import { Request, Response } from "express";
import { gerarToken } from "../../helpers/gerarToken";
import { verificarSenha } from "../../helpers/verificarSenha";
import { VerificarLogin } from "../../services/Login/Verificar_Login";

class ControllerLogin {
  async handle(request: Request, response: Response) {
    const { login, senha } = request.body

    if (!login) {
      return response.status(400)
        .json({ message: 'Por favor, insira um login!' })
    }

    if (!senha) {
      return response.status(400).json({ message: 'Por favor, insira a senha!' })
    }

    const verificarLogin = new VerificarLogin()
    const funcionario = await verificarLogin.execute({ login })
    const senhaVerificada = await verificarSenha(senha, funcionario?.senha as string)
    console.log(typeof funcionario)
    if (!funcionario || !senhaVerificada) {
      return response.status(400).json({ message: 'login e/ou senha inválido!' })
    }
    gerarToken({ funcionario, request, response });
  }
}

export { ControllerLogin }