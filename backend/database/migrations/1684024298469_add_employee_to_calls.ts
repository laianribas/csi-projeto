import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class AddEmployeeIdToCalls extends BaseSchema {
  protected tableName = 'calls';

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.uuid('employee_id').unsigned().references('id').inTable('employees').after('department_id');
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('employee_id');
    });
  }
}
