import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm';
import Position from './Position';

export default class Permission extends BaseModel {
  public static table = 'permissions';

  @column({ isPrimary: true })
  public id: number;

  @column()
  public description: string;

  @manyToMany(() => Position, {
    pivotTable: 'position_permission',
    pivotForeignKey: 'permission_id',
    pivotRelatedForeignKey: 'position_id',
    pivotTimestamps: true,
  })
  public positions: ManyToMany<typeof Position>;
}
