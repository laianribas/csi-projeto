import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddDepartmentPositionToEmployees extends BaseSchema {
  protected tableName = 'employees'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.integer('department_id').unsigned().references('departments.id').onDelete('SET NULL')
      table.integer('position_id').unsigned().references('positions.id').onDelete('SET NULL')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('department_id')
      table.dropColumn('position_id')
    })
  }
}
