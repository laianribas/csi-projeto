import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';
import Call from 'App/Models/Call';

export default class UpdateCallService {
  /**
   * Atualiza um chamado existente com base nos dados fornecidos.
   *
   * @param request - Os dados da requisição de atualização do chamado.
   * @param id - O ID do chamado a ser atualizado.
   * @returns O chamado atualizado.
   */
  public async execute(request: HttpContextContract['request'], id: string) {
    // Define o esquema de validação dos dados do chamado
    const validatedData = await schema.create({
      recipient: schema.string.optional({}, [rules.trim()]),
      area: schema.string.optional({}, [rules.trim()]),
      description: schema.string.optional({}, [rules.trim()]),
      assetTag: schema.string.optional({}, [rules.trim()]),
      evaluation: schema.string.optional({}, [rules.trim()]),
      departmentId: schema.number.optional(),
    });

    // Valida os dados recebidos na requisição
    const data = await request.validate({ schema: validatedData });

    // Busca o chamado pelo ID ou retorna uma exceção caso não exista
    const call = await Call.findOrFail(id);

    // Atualiza os campos do chamado com os valores validados, se fornecidos
    if (data.recipient) {
      call.recipient = data.recipient;
    }
    if (data.area) {
      call.area = data.area;
    }
    if (data.description) {
      call.description = data.description;
    }
    if (data.assetTag) {
      call.asset_tag = data.assetTag;
    }
    if (data.evaluation) {
      call.evaluation = data.evaluation;
    }
    if (data.departmentId) {
      call.departmentId = data.departmentId;
    }

    // Salva as alterações no chamado
    await call.save();

    await call.load('employee');
    await call.load('department');
    await call.load('status');

    return call;
  }
}
