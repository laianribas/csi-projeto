import crypto from 'crypto';
import 'dotenv/config'
interface INomeFuncionario {
  nome: string
}

function gerarSenha({ nome }: INomeFuncionario) {
  const nomeSplit = nome.split(' ')
  const senha = (nomeSplit[0] + '@' + nomeSplit[nomeSplit.length - 1]).toLowerCase()
  var senhaESalt = SHA512(senha, process.env.SECRET_KEY as string);
  return senhaESalt.hash2
}

function SHA512(senha: string, salt: string) {
  var hash = crypto.createHmac('sha512', salt)
  hash.update(senha);
  var hash2 = hash.digest('hex');
  return {
    salt, hash2
  }
}

function loginFuncionario(senha: string, hash: string) {
  var senhaESalt = SHA512(senha, process.env.SECRET_KEY as string)
  return senhaESalt.hash2 === hash
}

export { gerarSenha, loginFuncionario }