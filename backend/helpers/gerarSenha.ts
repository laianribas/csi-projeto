import crypto from 'crypto';

interface INomeFuncionario {
  nome: string
}

function gerarSenha({ nome }: INomeFuncionario) {
  var senhaESalt = SHA512(nome, 'secret');
  console.log('Senha Hash: ' + senhaESalt.hash2);
  console.log('Salt: ' + senhaESalt.salt);
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

function loginFuncionario(senha: string, salt: string, hash: string) {
  var senhaESalt = SHA512(senha, salt)
  return senhaESalt.hash2 === hash
}

export { gerarSenha, loginFuncionario }