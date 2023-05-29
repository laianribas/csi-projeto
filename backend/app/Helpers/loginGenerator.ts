import Employee from 'App/Models/Employee';

export default async function generateUniqueLogin(name: string): Promise<string> {
  const names = name.trim().split(' ');

  let login = '';
  if (names.length > 1) {
    // Primeiras letras dos nomes e último sobrenome completo
    const firstName = names[0][0];
    const lastName = names[names.length - 1];
    const middleNames = names.slice(1, names.length - 1).map((name) => name[0]).join('');
    login = (firstName + middleNames + lastName).toLowerCase();
  } else {
    // Apenas a primeira letra do nome
    login = names[0][0].toLowerCase();
  }

  let counter = 1;
  let uniqueLogin = login;

  while (await Employee.findBy('login', uniqueLogin)) {
    uniqueLogin = login + counter;
    counter++;
  }

  return uniqueLogin;
}
