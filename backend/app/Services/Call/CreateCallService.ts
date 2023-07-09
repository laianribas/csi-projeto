import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { rules, schema } from '@ioc:Adonis/Core/Validator';
import Call from 'App/Models/Call';
import Employee from 'App/Models/Employee';
import Status from 'App/Models/Status';

export default class CreateCallService {
  /**
   * Cria um novo chamado com base nos dados fornecidos.
   *
   * @param request - Os dados da requisição de criação do chamado.
   * @param employeeId - O ID do funcionário responsável pelo chamado.
   * @returns O chamado criado.
   */
  public async execute(request: HttpContextContract['request'], employeeId: string): Promise<Call> {
    // Define o esquema de validação dos dados do chamado
    const validatedData = await schema.create({
      area: schema.string({}, [rules.trim()]),
      description: schema.string({}, [rules.trim()]),
      assetTag: schema.string({}, [rules.trim()]),
      departmentId: schema.number(),
    });

    // Valida os dados recebidos na requisição
    const data = await request.validate({ schema: validatedData });

    // Obtenha o funcionário pelo ID
    const employee = await Employee.findOrFail(employeeId);

    // Cria uma nova instância do modelo Call
    const call = new Call();

    // Atribui os valores validados aos campos do chamado
    call.area = data.area;
    call.description = data.description;
    call.assetTag = data.assetTag;
    call.departmentId = data.departmentId;
    call.employeeId = employeeId;
    call.campusId = employee.campusId;
    call.active = true;

    // Salva o chamado no banco de dados
    await call.save();

    // Cria a relação com o status "aberto"
    const status = await Status.findBy('description', 'Em aberto');
    if (status) {
      await call.related('status').attach([status.id]);
    }

    await call.load('employee');
    await call.load('department');
    await call.load('status');

    return call;
  }
}
