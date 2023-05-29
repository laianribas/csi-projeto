import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { rules, schema } from '@ioc:Adonis/Core/Validator';
import Employee from 'App/Models/Employee';
import Position from 'App/Models/Position';
import Department from 'App/Models/Department';

export default class UpdateEmployeeService {
  /**
   * Atualiza os dados de um funcionário com base nos dados fornecidos.
   *
   * @param request - Os dados da requisição de atualização do funcionário.
   * @param id - O ID do funcionário a ser atualizado.
   * @returns O funcionário atualizado.
   */
  public async execute(request: HttpContextContract['request'], id: string) {
    // Define o esquema de validação para os dados do funcionário
    const validatedData = await schema.create({
      name: schema.string.optional({}, [rules.trim()]),
      login: schema.string.optional({}, [rules.trim()]),
      password: schema.string.optional({}, [rules.trim()]),
      firstLogin: schema.boolean.optional(),
      campusId: schema.number.optional(),
      positionId: schema.number.optional(),
      departmentIds: schema.array.optional().members(schema.number()),
    });

    // Valida os dados fornecidos na requisição com base no esquema definido
    const data = await request.validate({ schema: validatedData });

    // Encontra o funcionário com base no ID fornecido ou gera uma exceção caso não exista
    const employee = await Employee.findOrFail(id);

    // Atualiza os dados do funcionário, se os valores forem fornecidos
    if (data.name) {
      employee.name = data.name;
    }

    if (data.login) {
      employee.login = data.login;
    }

    if (data.password) {
      employee.password = data.password;
    }

    if (data.firstLogin !== undefined) {
      employee.firstLogin = data.firstLogin;
    }

    if (data.campusId) {
      employee.campusId = data.campusId;
    }

    await employee.save();

    // Atualiza a posição do funcionário, se o ID for fornecido
    if (data.positionId) {
      const position = await Position.findByOrFail('id', data.positionId);
      await employee.related('position').associate(position);
    }

    // Atualiza os departamentos do funcionário, se os IDs forem fornecidos
    if (data.departmentIds) {
      const departments = await Department.query().whereIn('id', data.departmentIds).exec();
      await employee.related('departments').sync(departments.map((department) => department.id));
    } else {
      // Remove todos os departamentos existentes do funcionário
      await employee.related('departments').detach();
    }

    await employee.load('departments')
    await employee.load('campus')
    await employee.load('position')

    // Retorna o funcionário atualizado
    return employee;
  }
}
