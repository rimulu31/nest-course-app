import { INTEGER } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'userInfo',
  timestamps: false,
})
export class userInfo extends Model {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  firstname: string;
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  lastname: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  hobby: string;
}
