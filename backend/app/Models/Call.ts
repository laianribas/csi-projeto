import { BaseModel, BelongsTo, ManyToMany, beforeCreate, belongsTo, column, manyToMany } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';
import Campus from './Campus';
import Department from './Department';
import Employee from './Employee';
import Status from './Status';

export default class Call extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column({ columnName: 'employee_id' })
  public employeeId: string;

  @column({ columnName: 'responsible_id' })
  public responsibleId: string;

  @column()
  public area: string;

  @column()
  public description: string;

  @column({ columnName: 'asset_tag' })
  public assetTag: string;

  @column()
  public evaluation: string;

  @column({ columnName: 'department_id' })
  public departmentId: number;

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

  @belongsTo(() => Employee, {
    foreignKey: 'responsibleId',
  })
  public responsible: BelongsTo<typeof Employee>;

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
