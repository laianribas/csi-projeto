import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreateCallsTable extends BaseSchema {
  protected tableName = 'calls';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().unique().notNullable();
      table.string('recipient').notNullable();
      table.string('area').notNullable();
      table.string('description').notNullable();
      table.string('asset_tag').notNullable();
      table.string('evaluation');
      table.integer('department_id').unsigned().notNullable();
      table.boolean('active').defaultTo(true);
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
