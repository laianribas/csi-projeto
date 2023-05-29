import Department from 'App/Models/Department';

export default class DeleteDepartmentService {
  /**
   * Inativa um departamento existente.
   *
   * @param id - O ID do departamento a ser inativado.
   * @returns O departamento inativado.
   * @throws {ModelNotFoundException} Se o departamento não for encontrado.
   */
  public async execute(id: number) {
    // Busca o departamento pelo ID ou lança uma exceção se não for encontrado
    const department = await Department.findOrFail(id);

    // Define o departamento como inativo
    department.active = false;

    // Salva o departamento no banco de dados
    await department.save();

    return department;
  }
}
