import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Position from 'App/Models/Position';
import UpdatePositionService from 'App/Services/Position/UpdatePositionService';

export default class PositionsController {
  /**
   * Lista todos os cargos.
   *
   * @param response - A resposta HTTP.
   * @returns Uma lista de todos os cargos.
   */
  public async index({ response }: HttpContextContract) {
    try {
      const positions = await Position.query().preload('permissions');

      return response.ok(positions);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Retorna os detalhes de um cargo específico.
   *
   * @param params - Os parâmetros da rota, incluindo o ID do cargo.
   * @param response - A resposta HTTP.
   * @returns Os detalhes do cargo encontrado.
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const position = await Position.findByOrFail('id', params.id);

      return response.ok(position);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Atualiza as permissões de um cargo.
   *
   * @param params - Os parâmetros da rota, incluindo o ID do cargo.
   * @param request - Os dados da requisição de atualização do cargo.
   * @param response - A resposta HTTP.
   * @returns O cargo atualizado.
   */
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const updatePositionService = new UpdatePositionService();
      const position = await updatePositionService.execute(request, params.id);

      return response.ok(position);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}
