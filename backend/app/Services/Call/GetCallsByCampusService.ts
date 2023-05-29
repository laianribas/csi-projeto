import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Call from 'App/Models/Call';
import Employee from 'App/Models/Employee';

export default class GetCallsByCampusService {
  /**
   * Retorna os chamados do campus do funcionário logado.
   *
   * @param request - A requisição HTTP.
   * @param employeeId - O ID do funcionário logado.
   * @returns Uma lista de chamados do campus do funcionário logado.
   */
  public async execute(request: HttpContextContract['request'], employeeId: string) {
    // Obtenha o funcionário logado pelo `employeeId`
    const employee = await Employee.findOrFail(employeeId);

    // Obtenha o ID do campus associado ao funcionário
    const { campusId } = employee;

    // Verifique se o campus foi encontrado
    if (!campusId) {
      throw new Error('Campus not found');
    }

    // Consulte os chamados relacionados ao campus do funcionário logado
    const calls = await Call.query()
      .whereHas('campus', (query) => {
        query.where('id', campusId);
      })
      .preload('employee')
      .preload('department')
      .preload('status')
      .orderBy('createdAt', 'desc')
      .paginate(request.input('page', 1), request.input('perPage', 10));

    return calls;
  }
}
