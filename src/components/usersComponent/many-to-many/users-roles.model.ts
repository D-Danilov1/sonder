import { Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { Roles } from '../roles/models/roles.model';
import { Users } from '../users/models/users.model';
import { EntityModel } from '../../../classes/core/entity.model';

interface UsersRolesCreationAttrs {
  userID: string;
  roleID: number;
}

@Table({tableName: 'UsersRoles'})
export class UsersRoles extends EntityModel<UsersRoles, UsersRolesCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Users)
  @Column({type: DataType.STRING})
  userID: string;

  @ForeignKey(() => Roles)
  @Column({type: DataType.INTEGER})
  roleID: number;
}
