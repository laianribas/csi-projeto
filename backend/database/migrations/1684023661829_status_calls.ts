import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreateStatusChamadoPivotTable extends BaseSchema {
  protected tableName = 'status_chamado';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.integer('status_id').unsigned().notNullable();
      table.foreign('status_id').references('statuses.id').onDelete('CASCADE');
      table.uuid('call_id').notNullable();
      table.foreign('call_id').references('calls.id').onDelete('CASCADE');
      table.dateTime('date').notNullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
