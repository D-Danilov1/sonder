import { Column, DataType, Table } from 'sequelize-typescript';
import { EntityModel } from '../../../../classes/core/entity.model';

interface UsersCategoriesCreationAttrs {
  name: string;
}

@Table({tableName: 'UsersCategories'})
export class UsersCategories extends EntityModel<UsersCategories, UsersCategoriesCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  name: string;
}
