import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreateEmployeeDepartment extends BaseSchema {
  protected tableName = 'employee_department';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();

      table.uuid('employee_id').unsigned().references('employees.id').onDelete('CASCADE');
      table.integer('department_id').unsigned().references('departments.id').onDelete('CASCADE');

      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
