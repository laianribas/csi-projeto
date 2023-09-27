import { AuthContract } from '@ioc:Adonis/Addons/Auth';
import Hash from '@ioc:Adonis/Core/Hash';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { rules, schema } from '@ioc:Adonis/Core/Validator';
import Employee from 'App/Models/Employee';

export default class LoginEmployeeService {
  private auth: AuthContract;

  constructor(auth: AuthContract) {
    this.auth = auth;
  }

  /**
   * Realiza o login do funcionário com base nas credenciais fornecidas.
   *
   * @param login - O login do funcionário.
   * @param password - A senha do funcionário.
   * @param request - A requisição HTTP.
   * @returns Um objeto contendo o token de autenticação.
   */
  public async execute(login: string, password: string, request: HttpContextContract['request']) {
    // Define o esquema de validação para os dados de login
    const validatedData = await schema.create({
      login: schema.string({}, [rules.trim()]),
      password: schema.string({}, [rules.trim()]),
    });

    // Valida os dados fornecidos na requisição com base no esquema definido
    const payload = await request.validate({ schema: validatedData });

    // Procura o funcionário com base no login fornecido
    const employee = await Employee.findBy('login', payload.login);

    // Verifica se o funcionário existe
    if (!employee) {
      throw new Error('Invalid login credentials');
    }


    // Verifica se a senha fornecida corresponde à senha do funcionário
    const passwordMatched = await Hash.verify(employee.password, password);

    // Verifica se as credenciais de login são inválidas
    if (!passwordMatched) {
      throw new Error('Invalid login credentials');
    }
    // Gera um token de autenticação para o funcionário
    const token = await this.auth.use('api').attempt(login, password);

    // Retorna o token gerado
    return { token };
  }
}
