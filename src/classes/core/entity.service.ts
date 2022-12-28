import { EntityModel } from './entity.model';
import { InjectModel } from '@nestjs/sequelize';

export abstract class EntityService {
  protected constructor(@InjectModel(EntityModel) protected repository: typeof EntityModel<any>) {
  }

  async create(dto: object): Promise<EntityModel<any>> {
    return await this.repository.create(dto);
  }

  async findAll(): Promise<EntityModel<any>[]> {
    return await this.repository.findAll();
  }

  async findByPk(id): Promise<EntityModel<any>> {
    return await this.repository.findByPk(id);
  }

  async update(dto): Promise<number[]> {
    return this.repository.update(dto, {where: {id: dto.id}});
  }

  async destroy(id): Promise<number> {
    return await this.repository.destroy({where: {id: id}});
  }
}
