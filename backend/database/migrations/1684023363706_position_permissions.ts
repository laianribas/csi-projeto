import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreatePositionPermission extends BaseSchema {
  protected tableName = 'position_permission';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();

      table.integer('position_id').unsigned().references('positions.id').onDelete('CASCADE');
      table.integer('permission_id').unsigned().references('permissions.id').onDelete('CASCADE');

      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
