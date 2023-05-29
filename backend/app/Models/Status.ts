import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Call from './Call';

export default class Status extends BaseModel {
  public static table = 'status';

  @column({ isPrimary: true })
  public id: number;

  @column()
  public description: string;

  @manyToMany(() => Call, {
    pivotTable: 'status_call',
    pivotForeignKey: 'status_id',
    pivotRelatedForeignKey: 'call_id',
  })
  public calls: ManyToMany<typeof Call>;
}
