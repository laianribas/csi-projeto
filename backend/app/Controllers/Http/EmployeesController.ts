import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Employee from 'App/Models/Employee';
import CreateEmployeeService from 'App/Services/Employee/CreateEmployeeService';
import UpdateEmployeeService from 'App/Services/Employee/UpdateEmployeeService';
import DeleteEmployeeService from 'App/Services/Employee/DeleteEmployeeService';
import LoginEmployeeService from 'App/Services/Employee/LoginEmployeeService';
import LogoutService from 'App/Services/Employee/LogoutService';

export default class EmployeesController {
  /**
   * Lista todos os funcionários.
   *
   * @param response - A resposta HTTP.
   * @returns Uma lista de todos os funcionários.
   */
  public async index({ response }: HttpContextContract) {
    try {
      const employees = await Employee.query().preload('departments').preload('position').preload('campus');

      return response.ok(employees);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Cria um novo funcionário.
   *
   * @param request - Os dados da requisição de criação do funcionário.
   * @param response - A resposta HTTP.
   * @returns O funcionário criado.
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const createEmployeeService = new CreateEmployeeService();
      const employee = await createEmployeeService.execute(request);

      return response.created(employee);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Retorna os detalhes de um funcionário específico.
   *
   * @param params - Os parâmetros da rota, incluindo o ID do funcionário.
   * @param response - A resposta HTTP.
   * @returns Os detalhes do funcionário encontrado.
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const employee = await Employee.findOrFail(params.id);

      return response.ok(employee);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Atualiza os dados de um funcionário.
   *
   * @param params - Os parâmetros da rota, incluindo o ID do funcionário.
   * @param request - Os dados da requisição de atualização do funcionário.
   * @param response - A resposta HTTP.
   * @returns O funcionário atualizado.
   */
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const updateEmployeeService = new UpdateEmployeeService();
      const employee = await updateEmployeeService.execute(request, params.id);

      return response.ok(employee);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Altera o status de um funcionário para inativo.
   *
   * @param params - Os parâmetros da rota, incluindo o ID do funcionário.
   * @param response - A resposta HTTP.
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const deleteEmployeeService = new DeleteEmployeeService();
      await deleteEmployeeService.execute(params.id);

      return response.noContent();
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Realiza o login do funcionário com base nas credenciais fornecidas.
   *
   * @param request - Os dados da requisição de login.
   * @param response - A resposta HTTP.
   * @param auth - O serviço de autenticação.
   * @returns O token de autenticação.
   */
  public async login({ request, response, auth }: HttpContextContract) {
    const { login, password } = request.only(['login', 'password']);

    try {
      const loginEmployeeService = new LoginEmployeeService(auth);
      const result = await loginEmployeeService.execute(login, password, request);

      return response.ok(result);
    } catch (error) {
      console.error(error);
      return response.status(401).json({ error: 'Invalid login credentials' });
    }
  }

  /**
   * Realiza o logout do funcionário.
   *
   * @param response - A resposta HTTP.
   * @param auth - O serviço de autenticação.
   */
  public async logout({ response, auth }: HttpContextContract) {
    try {
      const logoutService = new LogoutService(auth);
      await logoutService.execute();

      return response.noContent();
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}