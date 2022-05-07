import { SHA512 } from "./sha512"

function verificarSenha(senha: string, hash: string) {
  var senhaESalt = SHA512(senha, process.env.SECRET_KEY as string)
  return senhaESalt.hash2 === hash
}

export { verificarSenha }

