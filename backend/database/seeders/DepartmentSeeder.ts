import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Department from 'App/Models/Department';

export default class DepartmentSeeder extends BaseSeeder {
  public async run() {
    const departments = [
      { name: 'HR Department', extension: '100', description: 'Human Resources Department' },
      { name: 'Finance Department', extension: '200', description: 'Finance and Accounting Department' },
      { name: 'Marketing Department', extension: '300', description: 'Marketing and Advertising Department' },
      { name: 'IT Department', extension: '400', description: 'Information Technology Department' },
      // Adicione outros departamentos aqui
    ];

    await Department.createMany(departments);
  }
}
