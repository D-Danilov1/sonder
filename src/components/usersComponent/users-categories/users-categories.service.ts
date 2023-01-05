import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EntityService } from '../../../classes/core/entity.service';
import { findByName } from '../../../traits/find-by.trait';
import { UsersCategories } from './models/users-categories.model';

@Injectable()
export class UsersCategoriesService extends EntityService<UsersCategories> {
  constructor(@InjectModel(UsersCategories) protected repository: typeof UsersCategories) {
    super(repository);
  }

  findByName = findByName;
}
