import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreatePermissionsTable extends BaseSchema {
  protected tableName = 'permissions';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
