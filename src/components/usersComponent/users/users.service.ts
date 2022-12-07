import { Injectable } from '@nestjs/common';
import { Users } from './models/users.model';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from '../roles/roles.service';
import { EntityService } from '../../../database/entity.service';
import { createUsers } from '../../../traits/create-custom.trait';
import { findByEmail } from '../../../traits/find-by.trait';
import { addRoleToUser, removeRoleToUser } from '../../../traits/role-to-user';

@Injectable()
export class UsersService extends EntityService {
  constructor(
    @InjectModel(Users) private repository: typeof Users,
    private rolesService: RolesService,
  ) {
    super();
  }

  create = createUsers;
  findByEmail = findByEmail;

  addRoleToUser = addRoleToUser;
  removeRoleToUser = removeRoleToUser;
}
