import { Column, DataType, ForeignKey, HasMany, Table } from 'sequelize-typescript';
import { EntityModel } from '../../../../classes/core/entity.model';
import { Users } from '../../../usersComponent/users/models/users.model';
import { Expense } from '../../expense/models/expense.model';

interface ExpenseCategoryCreationAttrs {
  name: string;
  user_id: string;
}

@Table({tableName: 'ExpenseCategories'})
export class ExpenseCategories extends EntityModel<ExpenseCategories, ExpenseCategoryCreationAttrs> {
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

  @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
  is_system: boolean;

  @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: true})
  is_active: boolean;

  @HasMany(() => Expense)
  expense: Expense[];
}
