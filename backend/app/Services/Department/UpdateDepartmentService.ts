import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';
import Department from 'App/Models/Department';

export default class UpdateDepartmentService {
  /**
   * Atualiza um departamento existente com base nos dados fornecidos.
   *
   * @param id - O ID do departamento a ser atualizado.
   * @param request - Os dados da requisição de atualização do departamento.
   * @returns O departamento atualizado.
   * @throws {ModelNotFoundException} Se o departamento não for encontrado.
   */
  public async execute( request: HttpContextContract['request'], id: number) {
    // Busca o departamento pelo ID ou lança uma exceção se não for encontrado
    const department = await Department.findOrFail(id);

    // Define o esquema de validação dos dados do departamento
    const validatedData = await schema.create({
      name: schema.string.optional({}, [rules.trim()]),
      extension: schema.string.optional({}, [rules.trim()]),
      description: schema.string.optional({}, [rules.trim()]),
    });

    // Valida os dados recebidos na requisição
    const data = await request.validate({ schema: validatedData });

    // Atualiza os campos do departamento, se os dados estiverem presentes na requisição
    if (data.name) {
      department.name = data.name;
    }

    if (data.extension) {
      department.extension = data.extension;
    }

    if (data.description) {
      department.description = data.description;
    }

    // Salva o departamento no banco de dados
    await department.save();

    return department;
  }
}
