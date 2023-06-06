import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import CreateCallService from 'App/Services/Call/CreateCallService';
import UpdateCallService from 'App/Services/Call/UpdateCallService';
import GetCallsByCampusService from 'App/Services/Call/GetCallsByCampusService';
import GetCallsByEmployeeService from 'App/Services/Call/GetCallsByEmployeeService';
import GetCallsByDepartmentService from 'App/Services/Call/GetCallsByDepartmentService';
import DeleteCallService from 'App/Services/Call/DeleteCallService';
import Call from 'App/Models/Call';

export default class CallsController {
  /**
   * Lista todos os chamados.
   *
   * @param auth - O serviço de autenticação.
   * @param response - A resposta HTTP.
   */
  public async index({ response }: HttpContextContract) {
    try {
      const calls = await Call.query()
        .where('active', true)
        .preload('department')
        .preload('employee', query => query.preload('position'))
        .preload('status')
        .orderBy('createdAt', 'desc');

      return response.ok(calls);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Cria um novo chamado.
   *
   * @param request - A requisição HTTP.
   * @param auth - O serviço de autenticação.
   * @param response - A resposta HTTP.
   */
  public async store({ request, auth, response }: HttpContextContract) {
    try {
      const employeeId = auth.user?.id;
      const createCallService = new CreateCallService();
      const call = await createCallService.execute(request, employeeId);

      return response.created(call);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Retorna os detalhes de um chamado específico.
   *
   * @param params - Os parâmetros da rota.
   * @param response - A resposta HTTP.
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const call = await Call.findOrFail(params.id);

      return response.ok(call);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Atualiza os dados de um chamado.
   *
   * @param params - Os parâmetros da rota.
   * @param request - A requisição HTTP.
   * @param response - A resposta HTTP.
   */
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const updateCallService = new UpdateCallService();
      const call = await updateCallService.execute(request, params.id);

      return response.ok(call);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
  /**
   * Retorna os chamados por campus.
   *
   * @param auth - O serviço de autenticação.
   * @param response - A resposta HTTP.
   */
  public async indexByCampus({ auth, request, response }: HttpContextContract) {
    try {
      const employeeId = auth.user?.id;
      const getCallsByCampusService = new GetCallsByCampusService();
      const calls = await getCallsByCampusService.execute(request, employeeId);

      return response.ok(calls);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Retorna os chamados por funcionário.
   *
   * @param auth - O serviço de autenticação.
   * @param response - A resposta HTTP.
   */
  public async indexByEmployee({ auth, request, response }: HttpContextContract) {
    try {
      const employeeId = auth.user?.id;
      const getCallsByEmployeeService = new GetCallsByEmployeeService();
      const calls = await getCallsByEmployeeService.execute(request, employeeId);

      return response.ok(calls);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Retorna os chamados por setor.
   *
   * @param auth - O serviço de autenticação.
   * @param response - A resposta HTTP.
   */
  public async indexByDepartment({ auth, response }: HttpContextContract) {
    try {
      const employeeId = auth.user?.id;
      const getCallsByDepartmentService = new GetCallsByDepartmentService();
      const calls = await getCallsByDepartmentService.execute(employeeId);

      return response.ok(calls);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Exclui um chamado.
   *
   * @param params - Os parâmetros da rota.
   * @param response - A resposta HTTP.
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const deleteCallService = new DeleteCallService();
      await deleteCallService.execute(params.id);

      return response.noContent();
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}
