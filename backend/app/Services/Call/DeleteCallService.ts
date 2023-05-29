import Call from 'App/Models/Call';

export default class DeleteCallService {
  /**
   * Inativa um chamado existente.
   *
   * @param id - O ID do chamado a ser inativado.
   * @returns O chamado inativado.
   * @throws {ModelNotFoundException} Se o chamado não for encontrado.
   */
  public async execute(id: number) {
    // Busca o chamado pelo ID ou lança uma exceção se não for encontrado
    const call = await Call.findOrFail(id);

    // Define o chamado como inativo
    call.active = false;

    // Salva o chamado no banco de dados
    await call.save();

    return call;
  }
}
