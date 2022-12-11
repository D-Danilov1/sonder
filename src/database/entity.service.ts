import {
  create,
  destroy,
  findAll,
  findByPk,
  update,
} from '../traits/CRUD.trait';

export abstract class EntityService {
  create = create;
  findAll = findAll;
  findByPk = findByPk;
  update = update;
  destroy = destroy;

  // async create(dto) {
  //   return await this.repository.create(dto);
  // }
  //
  // async findAll() {
  //   return await this.repository.findAll();
  // }
  //
  // async findByPk(id, all = true) {
  //   return await this.repository.findByPk(
  //     id,
  //     all ? { include: { all: true } } : {},
  //   );
  // }
  //
  // async update(dto) {
  //   return this.repository.update(dto, { where: { id: dto.id } });
  // }
  //
  // async destroy(id) {
  //   return await this.repository.destroy({ where: { id: id } });
  // }
}
