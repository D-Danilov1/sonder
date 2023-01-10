import { Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { Funds } from '../funds/models/funds.model';
import { EntityModel } from '../../../classes/core/entity.model';
import { Users } from '../../usersComponent/users/models/users.model';

interface UsersFundsCreationAttrs {
  user_id: string;
  fund_id: number;
  percent: number;
}

// @IsNumber({}, {message: 'The value must be a number'})
// @IsPositive({message: 'The value must be a positive number'})
// readonly percent: number;

@Table({tableName: 'UsersFunds'})
export class UsersFunds extends EntityModel<UsersFunds, UsersFundsCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Users)
  @Column({type: DataType.STRING})
  user_id: string;

  @ForeignKey(() => Funds)
  @Column({type: DataType.INTEGER})
  fund_id: number;

  @Column({type: DataType.INTEGER, allowNull: false})
  percent: number;

  @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: true})
  is_active: boolean;
}
