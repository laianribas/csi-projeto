import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Campus from 'App/Models/Campus';

export default class CampusSeeder extends BaseSeeder {
  public async run() {
    await Campus.createMany([
      { nome: 'Jequié' },
      { nome: 'Vitória da Conquista' },
      { nome: 'Itapetinga' },
      // Adicione mais campi se necessário
    ]);
  }
}
