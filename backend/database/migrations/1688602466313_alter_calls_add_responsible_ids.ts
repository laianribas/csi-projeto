import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class AlterCallsAddResponsibleId extends BaseSchema {
  protected tableName = 'calls';

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.uuid('responsible_id').nullable().references('id').inTable('employees');
      table.dropColumn('recipient');
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('responsible_id');
      table.string('recipient');
    });
  }
}
