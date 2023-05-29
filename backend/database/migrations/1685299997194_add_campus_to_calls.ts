import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class AddCampusToCalls extends BaseSchema {
  protected tableName = 'calls';

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.integer('campus_id').unsigned().references('id').inTable('campuses').nullable();
    });
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(['campus_id']);
      table.dropColumn('campus_id');
    });
  }
}
