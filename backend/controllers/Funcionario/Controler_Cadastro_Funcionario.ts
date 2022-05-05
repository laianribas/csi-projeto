import { Request, Response } from 'express';
import { ServiceCadastroFuncionario } from '../../services/Funcionario/Service_Cadastro_Funcionario';
import crypto from 'crypto'

class ControllerCadastroFuncionario {
  async handle(request: Request, response: Response) {
    const serviceCadastroFuncionario = new ServiceCadastroFuncionario();
    const { campus, nivel_acesso, nome, setores } = request.body
    if (!nome) {
      return response.status(400).json({ message: 'O nome do funcionário deve ser informado!' })
    }
    if (!campus) {
      return response.status(400).json({ message: 'O campus do funcionário deve ser informado!' })
    }
    if (!nivel_acesso) {
      return response.status(400).json({ message: 'O nível de acesso do funcionário deve ser informado!' })
    }
    if (!setores || setores.length === 0) {
      return response.status(400).json({ message: 'O funcionário deve fazer parte de ao menos um setor!' })
    }

    let login = ''
    let senha = ''
    const auxiliarLogin = nome.split(' ')
    for (let i = 0; i < auxiliarLogin.length - 1; i++) {
      login = login + (auxiliarLogin[i].substring(0, 1)).toLowerCase();
    }
    login = login + auxiliarLogin[auxiliarLogin.length - 1].toLowerCase();
    senha = (auxiliarLogin[0] + '.' + auxiliarLogin[auxiliarLogin.length - 1]).toLowerCase();
    console.log('login:', login)
    console.log('senha:', senha)
    const algoritmo = 'aes-256-cbc';
    const vetorInicial = crypto.randomBytes(16)
    const chaveDeSeguranca = crypto.randomBytes(32)
    const cipher = crypto.createCipheriv(algoritmo, chaveDeSeguranca, vetorInicial)
    let senhaEncriptada = cipher.update(senha, "utf-8", "hex")
    senhaEncriptada += cipher.final("hex");
    console.log('senha criptografada:', senhaEncriptada)
    const decipher = crypto.createDecipheriv(algoritmo, chaveDeSeguranca, vetorInicial);
    let decryptedData = decipher.update(senhaEncriptada, "hex", "utf-8");
    decryptedData += decipher.final("utf8");
    console.log('senha descriptografada:', decryptedData)

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

export { ControllerCadastroFuncionario };
