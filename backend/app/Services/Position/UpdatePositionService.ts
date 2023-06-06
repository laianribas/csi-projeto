import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema } from '@ioc:Adonis/Core/Validator';
import Permission from 'App/Models/Permission';
import Position from 'App/Models/Position';

export default class UpdatePositionService {
  /**
   * Atualiza as permissões de um cargo existente com base nos dados fornecidos.
   *
   * @param request - Os dados da requisição de atualização do cargo.
   * @param id - O ID do cargo a ser atualizado.
   * @returns O cargo atualizado.
   */
  public async execute(request: HttpContextContract['request'], id: string) {
    // Define o esquema de validação dos dados do cargo
    const validatedData = await schema.create({
      permissionIds: schema.array().members(schema.number()),
    });

    // Valida os dados recebidos na requisição
    const data = await request.validate({ schema: validatedData });

    // Busca o cargo pelo ID ou retorna uma exceção caso não exista
    const position = await Position.query().where('id', id).firstOrFail();

    // Atualiza as permissões do cargo com base nos IDs fornecidos
    if (data.permissionIds) {
      const permissions = await Permission.query().whereIn('id', data.permissionIds).exec();
      console.log(position.$attributes)
      await position.related('permissions').sync(permissions.map((permission) => permission.id));
    } else {
      // Remove todas as permissões existentes do cargo
      await position.related('permissions').detach();
    }

    // Recarrega o cargo para obter as permissões atualizadas
    await position.load('permissions');

    return position;
  }
}
