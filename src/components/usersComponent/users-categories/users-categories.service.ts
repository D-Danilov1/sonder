import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EntityService } from '../../../database/entity.service';
import { findByName } from '../../../traits/find-by.trait';
import { UsersCategories } from './models/users-categories.model';

@Injectable()
export class UsersCategoriesService extends EntityService {
  constructor(@InjectModel(UsersCategories) protected repository) {
    super(repository);
  }

  findByName = findByName;
}
