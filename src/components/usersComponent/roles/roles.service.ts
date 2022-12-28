import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from './models/roles.model';
import { EntityService } from '../../../classes/core/entity.service';
import { findByName } from '../../../traits/find-by.trait';
import { EntityModel } from '../../../classes/core/entity.model';

@Injectable()
export class RolesService extends EntityService {
  constructor(@InjectModel(Roles) protected repository: typeof EntityModel<Roles>) {
    super(repository);
  }

  findByName = findByName;
}
