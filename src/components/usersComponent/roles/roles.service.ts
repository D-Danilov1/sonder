import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from './models/roles.model';
import { EntityService } from '../../../database/entity.service';
import { findByName } from '../../../traits/find-by.trait';

@Injectable()
export class RolesService extends EntityService {
  constructor(@InjectModel(Roles) private repository: typeof Roles) {
    super();
  }

  findByName = findByName;
}
