interface INomeFuncionario {
  nome: string
}

function gerarLogin({ nome }: INomeFuncionario) {
  console.log(nome)
  const auxiliarLogin = nome.split(' ')
  let login = ''
  for (let i = 0; i < auxiliarLogin.length - 1; i++) {
    login = login + (auxiliarLogin[i].substring(0, 1)).toLowerCase();
  }
  login = login + auxiliarLogin[auxiliarLogin.length - 1].toLowerCase();
  return login
}

export { gerarLogin }