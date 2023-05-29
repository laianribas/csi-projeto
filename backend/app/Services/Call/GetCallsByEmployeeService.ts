import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Call from 'App/Models/Call';

export default class GetCallsByEmployeeService {
  /**
   * Retorna os chamados do funcionário logado.
   *
   * @param request - A requisição HTTP.
   * @param employeeId - O ID do funcionário logado.
   * @returns Uma lista de chamados do funcionário logado.
   */
  public async execute(request: HttpContextContract['request'], employeeId: string) {
    // Consulte os chamados relacionados ao funcionário logado
    const calls = await Call.query()
      .where('employeeId', employeeId)
      .preload('employee')
      .preload('department')
      .preload('status')
      .orderBy('createdAt', 'desc')
      .paginate(request.input('page', 1), request.input('perPage', 10));

    return calls;
  }
}
