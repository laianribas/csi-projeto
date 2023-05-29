import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreateStatusTable extends BaseSchema {
  protected tableName = 'statuses';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable();
      table.string('description').notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
