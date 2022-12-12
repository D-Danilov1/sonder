import { EntityModel } from './entity.model';
import { InjectModel } from '@nestjs/sequelize';

export abstract class EntityService {
  protected constructor(@InjectModel(EntityModel) protected repository) {
  }

  async create(dto: object): Promise<EntityModel<any, any>> {
    return await this.repository.create(dto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findByPk(id, all = true) {
    const include = all
      ? { include: { all: true } }
      : {};
    return await this.repository.findByPk(id, include);
  }

  async update(dto) {
    return this.repository.update(dto, { where: { id: dto.id } });
  }

  async destroy(id) {
    return await this.repository.destroy({ where: { id: id } });
  }
}
