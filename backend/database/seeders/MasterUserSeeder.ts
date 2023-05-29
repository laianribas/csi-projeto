import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Employee from 'App/Models/Employee';
import { v4 as uuidv4 } from 'uuid';

export default class MasterUserSeeder extends BaseSeeder {
  public async run() {
    const masterUser = await Employee.create({
      id: uuidv4(),
      name: 'Master User',
      login: 'laian',
      password: 'laian',
      firstLogin: false,
      campusId: 1,
    });

    console.log('Master User created:', masterUser);
  }
}
