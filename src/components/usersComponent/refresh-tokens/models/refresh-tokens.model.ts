import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { Users } from '../../users/models/users.model';
import { EntityModel } from '../../../../classes/core/entity.model';

interface RefreshTokenCreationAttrs {
  userID: string;
  token: string;
}

@Table({tableName: 'RefreshTokens'})
export class RefreshTokens extends EntityModel<RefreshTokens, RefreshTokenCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({type: DataType.STRING, unique: true})
  token: string;

  @ForeignKey(() => Users)
  @Column({type: DataType.STRING})
  userID: string;

  @BelongsTo(() => Users)
  user: Users;
}
