import {
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Roles } from '../roles/models/roles.model';
import { Users } from '../users/models/users.model';
import { EntityModel } from '../../../database/entity.model';

interface UsersRolesCreationAttrs {
  userID: string;
  roleID: number;
}

@Table({ tableName: 'UsersRoles' })
export class UsersRoles extends EntityModel<UsersRoles, UsersRolesCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: '4b6bea0b-62d4-40a9-a350-ae40632dc15f',
    description: 'User ID',
  })
  @ForeignKey(() => Users)
  @Column({ type: DataType.STRING })
  userID: string;

  @ApiProperty({ example: '1', description: 'Role ID' })
  @ForeignKey(() => Roles)
  @Column({ type: DataType.INTEGER })
  roleID: number;
}
