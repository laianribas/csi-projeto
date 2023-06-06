import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Call from './Call';

export default class Status extends BaseModel {
  public static table = 'statuses';

  @column({ isPrimary: true })
  public id: number;

  @column()
  public description: string;

  @manyToMany(() => Call, {
    pivotTable: 'status_call',
    pivotForeignKey: 'status_id',
    pivotRelatedForeignKey: 'call_id',
    pivotTimestamps: true,
    pivotColumns: ['date', 'created_at', 'updated_at']
  })
  public calls: ManyToMany<typeof Call>;
}
