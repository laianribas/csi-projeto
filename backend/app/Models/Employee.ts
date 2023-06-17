import Hash from '@ioc:Adonis/Core/Hash';
import { BaseModel, beforeCreate, beforeSave, BelongsTo, belongsTo, column, HasMany, hasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';
import Call from './Call';
import Campus from './Campus';
import Department from './Department';
import Position from './Position';

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public name: string;

  @column({ serializeAs: null })
  public login: string;

  @column({ serializeAs: null })
  public password: string;

  @column({ serializeAs: null })
  public firstLogin: boolean;

  @column({ columnName: 'position_id' })
  public positionId: number;

  @column({ columnName: 'campus_id' })
  public campusId: number;

  @column({ serializeAs: null })
  public active: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Call, {
    foreignKey: 'employeeId',
  })
  public calls: HasMany<typeof Call>;

  @belongsTo(() => Department, {
    foreignKey: 'departmentId',
  })
  public department: BelongsTo<typeof Department>;

  @belongsTo(() => Position, {
    foreignKey: 'positionId',
  })
  public position: BelongsTo<typeof Position>;

  @belongsTo(() => Campus, {
    foreignKey: 'campusId',
  })
  public campus: BelongsTo<typeof Campus>;

  @manyToMany(() => Department, {
    pivotTable: 'employee_department',
    pivotForeignKey: 'employee_id',
    pivotRelatedForeignKey: 'department_id',
    pivotTimestamps: true,
  })
  public departments: ManyToMany<typeof Department>;

  @beforeCreate()
  public static async createUUID(employee: Employee) {
    if (employee.id === undefined) {
      employee.id = uuidv4()
    }
  }

  @beforeSave()
  public static async hashPassword(employee: Employee) {
    if (employee.$dirty.password) {
      employee.password = await Hash.make(employee.password)
    }
  }
}
