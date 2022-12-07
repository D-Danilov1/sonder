import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UsersCategoriesCreationAttrs {
  name: string;
}

@Table({ tableName: 'UsersCategories' })
export class UsersCategories extends Model<
  UsersCategories,
  UsersCategoriesCreationAttrs
> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'DOCTOR', description: 'Users category name' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
}