import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Permission from './Permission'

export default class Position extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @manyToMany(() => Permission, {
    pivotTable: 'position_permission',
    pivotForeignKey: 'position_id',
    pivotRelatedForeignKey: 'permission_id',
    pivotTimestamps: true,
  })
  public permissions: ManyToMany<typeof Permission>;
}
