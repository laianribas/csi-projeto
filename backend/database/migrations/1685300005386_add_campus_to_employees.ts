import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class AddCampusToEmployee extends BaseSchema {
  protected tableName = 'employees';

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('campus');
      table.integer('campus_id').unsigned().references('id').inTable('campuses').nullable();
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign(['campus_id']);
      table.renameColumn('campus_id', 'campus');
    });
  }
}
