import { BelongsToMany, Column, DataType, Table } from 'sequelize-typescript';
import { Roles } from '../../roles/models/roles.model';
import { UsersRoles } from '../../many-to-many/users-roles.model';
import { EntityModel } from '../../../../classes/core/entity.model';

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
}
