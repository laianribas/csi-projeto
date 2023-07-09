import Employee from "App/Models/Employee";

export default class GetSupportEmployeesService {
  /**
   * Retorna os funcionários que possuem os cargos de "Suporte", "Redes" ou "Manutenção".
   *
   * @returns Uma lista de funcionários.
   */
  public async execute() {
    const employees = await Employee.query()
      .whereHas('position', (query) => {
        query.whereIn('name', ['Suporte', 'Redes', 'Manutenção']);
      })
      .preload('position')
      .preload('campus')
      .preload('departments')
      .exec();

    return employees;
  }
}
