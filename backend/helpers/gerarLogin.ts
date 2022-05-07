import { VerificarLogin } from "../services/Login/Verificar_Login";

interface INomeFuncionario {
  nome: string
}

async function gerarLogin({ nome }: INomeFuncionario) {
  const auxiliarLogin = nome.split(' ')
  const verificarLogin = new VerificarLogin();
  let login = ''
  for (let i = 0; i < auxiliarLogin.length - 1; i++) {
    login = login + (auxiliarLogin[i].substring(0, 1)).toLowerCase();
  }
  login = login + auxiliarLogin[auxiliarLogin.length - 1].toLowerCase();
  if (await verificarLogin.execute({ login })) {
    login += Math.random().toString().substring(2, 6);
  }
  return login
}

export { gerarLogin };
