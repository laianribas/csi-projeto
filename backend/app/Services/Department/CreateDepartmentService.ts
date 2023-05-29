import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';
import Department from 'App/Models/Department';

export default class CreateDepartmentService {
  /**
   * Cria um novo departamento com base nos dados fornecidos.
   *
   * @param request - Os dados da requisição de criação do departamento.
   * @returns O departamento criado.
   */
  public async execute(request: HttpContextContract['request']) {
    // Define o esquema de validação dos dados do departamento
    const validatedData = await schema.create({
      name: schema.string({}, [rules.trim()]),
      extension: schema.string({}, [rules.trim()]),
      description: schema.string.optional({}, [rules.trim()]),
    });

    // Valida os dados recebidos na requisição
    const data = await request.validate({ schema: validatedData });

    // Cria uma nova instância do modelo Department
    const department = new Department();

    // Atribui os valores validados aos campos do departamento
    department.name = data.name;
    department.extension = data.extension;
    department.description = data.description || '';

    // Salva o departamento no banco de dados
    await department.save();

    return department;
  }
}
