import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Roles } from '../../roles/models/roles.model';
import { UsersRoles } from '../../many-to-many/users-roles.model';
import { EntityModel } from '../../../../database/entity.model';

interface UserCreationAttrs {
  id: string;
  email: string;
  password: string;
}

@Table({ tableName: 'Users' })
export class Users extends EntityModel<Users, UserCreationAttrs> {
  @ApiProperty({
    example: '4b6bea0b-62d4-40a9-a350-ae40632dc15f',
    description: 'Unique identifier',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({ example: 'example@gmail.com', description: 'Email address' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ description: 'User password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @BelongsToMany(() => Roles, () => UsersRoles)
  roles: Roles[];
}
