import { BaseModel, column, HasMany, hasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Call from './Call';
import { DateTime } from 'luxon';
import Employee from './Employee';

export default class Department extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public extension: string;

  @column()
  public description: string;

  @column()
  public active: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Call, {
    foreignKey: 'departmentId',
  })
  public calls: HasMany<typeof Call>;

  @manyToMany(() => Employee, {
    pivotTable: 'employee_department',
    pivotForeignKey: 'department_id',
    pivotRelatedForeignKey: 'employee_id',
    pivotTimestamps: true,
  })
  public employees: ManyToMany<typeof Employee>;
}
