import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Position from 'App/Models/Position';

export default class extends BaseSeeder {
  public async run() {
    await Position.query().delete();

    const positions = [
      { name: 'Coordenador' },
      { name: 'Suporte' },
      { name: 'Secretario' },
      { name: 'Redes' },
      { name: 'Manutenção' },
    ];

    await Position.createMany(positions);
  }
}
