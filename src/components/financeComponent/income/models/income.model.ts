import { Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { EntityModel } from '../../../../classes/core/entity.model';
import { Users } from '../../../usersComponent/users/models/users.model';
import { IncomeCategories } from '../../income-categories/models/income-categories.model';

interface FundCreationAttrs {
  sum: number;
  user_id: string;
  income_category_id: number;
  comment: string;
  date: string;
}

@Table({tableName: 'Income'})
export class Income extends EntityModel<Income, FundCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({type: DataType.INTEGER, allowNull: false})
  sum: number;

  @ForeignKey(() => Users)
  @Column({type: DataType.STRING, allowNull: false})
  user_id: string;

  @ForeignKey(() => IncomeCategories)
  @Column({type: DataType.INTEGER, allowNull: false})
  income_category_id: number;

  @Column({type: DataType.TEXT, allowNull: false})
  comment: string;

  @Column({type: DataType.DATE, allowNull: false})
  date: string;
}
