import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Campuses extends BaseSchema {
  protected tableName = 'campuses';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
