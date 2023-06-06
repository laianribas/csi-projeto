import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Status from 'App/Models/Status';

export default class StatusSeeder extends BaseSeeder {
  public async run() {
    const statusesData = [
      {
        description: 'Em aberto',
      },
      {
        description: 'Em andamento',
      },
      {
        description: 'Concluído',
      },
    ];

    await Status.createMany(statusesData);
  }
}
