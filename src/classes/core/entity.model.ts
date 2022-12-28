import { Model } from 'sequelize-typescript';

export class EntityModel<M, UCA = {}> extends Model<M, UCA> {}