
import Call from 'App/Models/Call';
import Employee from 'App/Models/Employee';

export default class GetCallsByEmployeeService {
  /**
   * Retorna os chamados do funcionário logado.
   *
   * @param employeeId - O ID do funcionário logado.
   * @returns Uma lista de chamados do funcionário logado.
   */
  public async execute(employeeId: string) {
    // Obtenha o funcionário logado pelo `employeeId`
    const employee = await Employee.findOrFail(employeeId);

    // Obtenha os setores associados ao funcionário
    const departments = await employee.related('departments').query();

    // Obtenha os IDs dos setores
    const departmentIds = departments.map((department) => department.id);

    // Consulte os chamados relacionados aos setores do funcionário logado
    const calls = await Call.query()
      .whereIn('departmentId', departmentIds)
      .preload('employee')
      .preload('responsible')
      .preload('department')
      .preload('status')
      .orderBy('createdAt', 'desc')
      .paginate(1, 10);

    return calls;
  }
}
