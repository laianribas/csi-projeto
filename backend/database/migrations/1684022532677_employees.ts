import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreateEmployeesTable extends BaseSchema {
  protected tableName = 'employees';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().unique().notNullable();
      table.string('name').notNullable();
      table.string('login').notNullable().unique();
      table.string('password').notNullable();
      table.boolean('first_login').defaultTo(true);
      table.string('campus').notNullable();
      table.boolean('active').defaultTo(true);
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.alterTable('employees', (table) => {
      table.dropForeign(['department_id']);
      table.dropColumn('department_id');
      table.dropForeign(['position_id']);
      table.dropColumn('position_id');
    });

    this.schema.dropTable(this.tableName);
  }
}
