import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Users } from './models/users.model';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from '../roles/roles.service';
import { EntityService } from '../../../database/entity.service';
import { createUsers } from '../../../traits/create-custom.trait';
import { findByEmail } from '../../../traits/find-by.trait';
import { RoleToUserDto } from './dto/role-to-user.dto';

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

  async addRoleToUser(dto: RoleToUserDto) {
    const user = await this.repository.findOne({
      where: { email: dto.userEmail },
    });
    const role = await this.rolesService.findByName(dto.roleName);
    if (!user || !role) {
      throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
    }
    return await user.$add('roles', role.id);
  }

  async removeRoleToUser(dto: RoleToUserDto) {
    const user = await this.repository.findOne({
      where: { email: dto.userEmail },
    });
    const role = await this.rolesService.findByName(dto.roleName);
    if (!user || !role) {
      throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
    }
    return await user.$remove('roles', role.id);
  }
}
