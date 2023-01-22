import { Column, DataType, ForeignKey, HasMany, Table } from 'sequelize-typescript';
import { EntityModel } from '../../../../classes/core/entity.model';
import { Users } from '../../../usersComponent/users/models/users.model';
import { Expense } from '../../expense/models/expense.model';

interface FundCreationAttrs {
  name: string;
  user_id: string;
  percent: number;
}

@Table({tableName: 'Funds'})
export class Funds extends EntityModel<Funds, FundCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  name: string;

  @ForeignKey(() => Users)
  @Column({type: DataType.STRING, allowNull: false})
  user_id: string;

  @Column({type: DataType.INTEGER, allowNull: false})
  percent: number;

  @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: true})
  is_active: boolean;

  @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
  is_system: boolean;

  @HasMany(() => Expense)
  expense: Expense[];
}
