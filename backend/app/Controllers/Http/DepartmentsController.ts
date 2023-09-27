import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Department from 'App/Models/Department';
import CreateDepartmentService from 'App/Services/Department/CreateDepartmentService';
import DeleteDepartmentService from 'App/Services/Department/DeleteDepartmentService';
import UpdateDepartmentService from 'App/Services/Department/UpdateDepartmentService';

export default class DepartmentsController {
  /**
   * Lista todos os departamentos.
   *
   * @param response - A resposta HTTP.
   * @returns Uma lista de todos os departamentos.
   */
  public async index({ response }: HttpContextContract) {
    try {
      const departments = await Department.query()
        .preload('employees')
        .preload('calls');

      return response.ok(departments);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Cria um novo departamento.
   *
   * @param request - Os dados da requisição de criação do departamento.
   * @param response - A resposta HTTP.
   * @returns O departamento criado.
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const createDepartmentService = new CreateDepartmentService();
      const department = await createDepartmentService.execute(request);

      return response.created(department);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Retorna os detalhes de um departamento específico.
   *
   * @param params - Os parâmetros da rota, incluindo o ID do departamento.
   * @param response - A resposta HTTP.
   * @returns Os detalhes do departamento encontrado.
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const department = await Department.findOrFail(params.id);

      return response.ok(department);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Atualiza os dados de um departamento.
   *
   * @param params - Os parâmetros da rota, incluindo o ID do departamento.
   * @param request - Os dados da requisição de atualização do departamento.
   * @param response - A resposta HTTP.
   * @returns O departamento atualizado.
   */
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const updateDepartmentService = new UpdateDepartmentService();
      const department = await updateDepartmentService.execute(request, params.id);

      return response.ok(department);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Inativa um departamento.
   *
   * @param params - Os parâmetros da rota, incluindo o ID do departamento.
   * @param response - A resposta HTTP.
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const deleteDepartmentService = new DeleteDepartmentService();
      await deleteDepartmentService.execute(params.id);

      return response.noContent();
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}
