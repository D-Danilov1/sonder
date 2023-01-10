import { BelongsToMany, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { UsersFunds } from '../../many-to-many/users-funds.model';
import { EntityModel } from '../../../../classes/core/entity.model';
import { Users } from '../../../usersComponent/users/models/users.model';

interface FundCreationAttrs {
  name: string;
  user_id: string;
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

  @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
  is_system: boolean;

  @BelongsToMany(() => Users, () => UsersFunds)
  users: Users[];
}
