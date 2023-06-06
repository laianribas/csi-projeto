import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class AlterStatusCallsDate extends BaseSchema {
  protected tableName = 'status_call';

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dateTime('date').defaultTo(this.now()).alter();
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dateTime('date').notNullable().alter();
    });
  }
}
