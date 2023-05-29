import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreatePositionsTable extends BaseSchema {
  protected tableName = 'positions';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
