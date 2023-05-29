import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { rules, schema } from '@ioc:Adonis/Core/Validator';
import Employee from 'App/Models/Employee';
import Department from 'App/Models/Department';
import Position from 'App/Models/Position';
import generateUniqueLogin from 'App/Helpers/loginGenerator';
import generatePassword from 'App/Helpers/passwordGenerator';
import Campus from 'App/Models/Campus';

export default class CreateEmployeeService {
  /**
   * Cria um novo funcionário com base nos dados fornecidos.
   *
   * @param request - Os dados da requisição de criação do funcionário.
   * @returns O funcionário criado.
   * @throws {Error} Se um ou mais departamentos não existirem.
   * @throws {Error} Se a posição não existir.
   */
  public async execute(request: HttpContextContract['request']) {
    // Define o esquema de validação para os dados do funcionário
    const validatedData = await schema.create({
      name: schema.string({}, [rules.trim()]),
      departmentIds: schema.array().members(schema.number()),
      positionId: schema.number(),
      campusId: schema.number(),
    });

    // Valida os dados fornecidos na requisição com base no esquema definido
    const data = await request.validate({ schema: validatedData });

    // Verifica se os departamentos fornecidos existem no banco de dados
    const departments = await Department.query().whereIn('id', data.departmentIds).exec();

    if (departments.length !== data.departmentIds.length) {
      throw new Error('One or more departments do not exist');
    }

    // Encontra a posição (position) com base no ID fornecido
    const position = await Position.findByOrFail('id', data.positionId);

    // Encontra o Campus com base no ID fornecido
    await Campus.findByOrFail('id', data.campusId);

    const login = await generateUniqueLogin(data.name); // Gerando o login único

    const password = generatePassword(data.name); // Gerando a senha

    // Cria uma nova instância do modelo Employee
    const employee = new Employee();

    // Define os valores do funcionário
    employee.login = login;
    employee.password = password;
    employee.name = data.name;
    employee.campusId = data.campusId;
    employee.active = true;

    // Salva o funcionário no banco de dados
    await employee.save();

    // Estabelece o relacionamento entre o funcionário e os departamentos
    await employee.related('departments').attach(data.departmentIds);

    // Estabelece o relacionamento entre o funcionário e a posição
    await employee.related('position').associate(position);

    // Carrega as relações do funcionário criado
    await employee.load('campus')
    await employee.load('position')
    await employee.load('departments')

    // Retorna o funcionário criado
    return employee;
  }
}
