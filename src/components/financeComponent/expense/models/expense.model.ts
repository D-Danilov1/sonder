import { Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { EntityModel } from '../../../../classes/core/entity.model';
import { Users } from '../../../usersComponent/users/models/users.model';
import { ExpenseCategories } from '../../expense-categories/models/expense-categories.model';
import { Funds } from '../../funds/models/funds.model';

interface ExpenseCreationAttrs {
  sum: number;
  user_id: string;
  expense_category_id: number;
  fund_id: number;
  comment: string;
  date: string;
}

@Table({tableName: 'Expense'})
export class Expense extends EntityModel<Expense, ExpenseCreationAttrs> {
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

  @ForeignKey(() => ExpenseCategories)
  @Column({type: DataType.INTEGER, allowNull: false})
  expense_category_id: number;

  @ForeignKey(() => Funds)
  @Column({type: DataType.INTEGER, allowNull: false})
  fund_id: number;

  @Column({type: DataType.TEXT, allowNull: false})
  comment: string;

  @Column({type: DataType.DATE, allowNull: false})
  date: string;
}
