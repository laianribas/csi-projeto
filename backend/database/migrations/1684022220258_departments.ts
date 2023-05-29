import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreateDepartmentsTable extends BaseSchema {
  protected tableName = 'departments';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('name', 255).notNullable();
      table.string('extension', 20).nullable();
      table.string('description', 255).nullable();
      table.boolean('active').defaultTo(true);
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
