import 'dotenv/config';
import { SHA512 } from './sha512';
interface INomeFuncionario {
  nome: string
}

function gerarSenha({ nome }: INomeFuncionario) {
  const nomeSplit = nome.split(' ')
  const senha = (nomeSplit[0] + '@' + nomeSplit[nomeSplit.length - 1]).toLowerCase()
  var senhaESalt = SHA512(senha, process.env.SECRET_KEY as string);
  return senhaESalt.hash2
}

export { gerarSenha };

