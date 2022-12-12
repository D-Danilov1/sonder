import {
  BelongsToMany,
  Column,
  DataType,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Users } from '../../users/models/users.model';
import { UsersRoles } from '../../many-to-many/users-roles.model';
import { EntityModel } from '../../../../database/entity.model';

interface RoleCreationAttrs {
  name: string;
}

@Table({ tableName: 'Roles' })
export class Roles extends EntityModel<Roles, RoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'MODERATOR', description: 'Unique role name' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @BelongsToMany(() => Users, () => UsersRoles)
  users: Users[];
}
