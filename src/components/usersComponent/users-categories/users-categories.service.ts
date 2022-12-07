import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EntityService } from '../../../database/entity.service';
import { findByName } from '../../../traits/find-by.trait';
import { UsersCategories } from './models/users-categories.model';

@Injectable()
export class UsersCategoriesService extends EntityService {
  constructor(
    @InjectModel(UsersCategories) private repository: typeof UsersCategories,
  ) {
    super();
  }

  findByName = findByName;
}
