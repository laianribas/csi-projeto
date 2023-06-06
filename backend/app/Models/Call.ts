import { BaseModel, column, BelongsTo, belongsTo, ManyToMany, manyToMany, beforeCreate } from '@ioc:Adonis/Lucid/Orm';
import { v4 as uuidv4 } from 'uuid';
import Employee from './Employee';
import Department from './Department';
import { DateTime } from 'luxon';
import Status from './Status';
import Campus from './Campus';

export default class Call extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public recipient: string;

  @column()
  public area: string;

  @column()
  public description: string;

  @column()
  public asset_tag: string;

  @column()
  public evaluation: string;

  @column({ columnName: 'department_id' })
  public departmentId: number;

  @column({ columnName: 'employee_id' })
  public employeeId: string;

  @column({ columnName: 'campus_id' })
  public campusId: number;

  @column()
  public active: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Employee, {
    foreignKey: 'employeeId',
  })
  public employee: BelongsTo<typeof Employee>;

  @belongsTo(() => Department, {
    foreignKey: 'departmentId',
  })
  public department: BelongsTo<typeof Department>;

  @belongsTo(() => Campus, {
    foreignKey: 'campusId',
  })
  public campus: BelongsTo<typeof Campus>;

  @manyToMany(() => Status, {
    pivotTable: 'status_call',
    pivotForeignKey: 'call_id',
    pivotRelatedForeignKey: 'status_id',
    pivotTimestamps: true,
    pivotColumns: ['date', 'created_at', 'updated_at']
  })
  public status: ManyToMany<typeof Status>;

  @beforeCreate()
  public static async createUUID(call: Call) {
    if (call.id === undefined) {
      call.id = uuidv4()
    }
  }

}
