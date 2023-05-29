import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Permission from 'App/Models/Permission';

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    const permissions = [
      { id: 1, description: 'Cadastrar chamado' },
      { id: 2, description: 'Chamado por campus' },
      { id: 3, description: 'Chamado por funcionário' },
      { id: 4, description: 'Chamado por setor' },
      { id: 5, description: 'Editar chamado' },
      { id: 6, description: 'Editar status chamado' },
      { id: 7, description: 'Resgatar chamado' },
      { id: 8, description: 'Resgatar todos chamados' },
      { id: 9, description: 'Cadastrar funcionário' },
      { id: 10, description: 'Editar funcionário' },
      { id: 11, description: 'Inativar funcionário' },
      { id: 12, description: 'Resgatar funcionário' },
      { id: 13, description: 'Resgatar todos funcionários' },
      { id: 14, description: 'Cadastrar setor' },
      { id: 15, description: 'Editar setor' },
      { id: 16, description: 'Resgatar setor' },
      { id: 17, description: 'Inativar setor' },
      { id: 18, description: 'Resgatar todos setores' },
    ];

    await Permission.createMany(permissions);
  }
}
