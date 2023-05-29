import Employee from 'App/Models/Employee';

export default class DeleteEmployeeService {
  /**
   * Inativa um funcionário com base no ID fornecido.
   *
   * @param id - O ID do funcionário a ser inativado.
   */
  public async execute(id: number) {
    // Encontra o funcionário com base no ID fornecido
    const employee = await Employee.findOrFail(id);

    // Atualiza o status do funcionário para "inativo"
    employee.active = false;

    // Salva as alterações no banco de dados
    await employee.save();
  }
}
