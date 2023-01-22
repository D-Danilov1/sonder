import { BelongsToMany, Column, DataType, HasMany, Table } from 'sequelize-typescript';
import { Roles } from '../../roles/models/roles.model';
import { UsersRoles } from '../../many-to-many/users-roles.model';
import { EntityModel } from '../../../../classes/core/entity.model';
import { Funds } from '../../../financeComponent/funds/models/funds.model';
import { ExpenseCategories } from '../../../financeComponent/expense-categories/models/expense-categories.model';
import { IncomeCategories } from '../../../financeComponent/income-categories/models/income-categories.model';
import { Income } from '../../../financeComponent/income/models/income.model';

interface UserCreationAttrs {
  id: string;
  email: string;
  password: string;
}

@Table({tableName: 'Users'})
export class Users extends EntityModel<Users, UserCreationAttrs> {
  @Column({
    type: DataType.STRING,
    unique: true,
    primaryKey: true,
  })
  id: string;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @BelongsToMany(() => Roles, () => UsersRoles)
  roles: Roles[];

  @HasMany(() => Funds)
  funds: Funds[];

  @HasMany(() => ExpenseCategories)
  expenseCategories: ExpenseCategories[];

  @HasMany(() => Income)
  income: Income[];

  @HasMany(() => IncomeCategories)
  incomeCategories: IncomeCategories[];
}
