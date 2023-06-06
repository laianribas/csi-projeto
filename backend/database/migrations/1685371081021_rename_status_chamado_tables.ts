import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class RenameStatusCallTable extends BaseSchema {
  protected tableName = 'status_chamado';

  public async up() {
    this.schema.renameTable(this.tableName, 'status_call');
  }

  public async down() {
    this.schema.renameTable('status_call', this.tableName);
  }
}
