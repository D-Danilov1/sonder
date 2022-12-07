import * as bcrypt from 'bcryptjs';
import { Users } from '../components/usersComponent/users/models/users.model';
import { ROLES } from '../constants/roles.constants';
import { CreateUsersDto } from '../components/usersComponent/users/dto/create-users.dto';
import { HttpException, HttpStatus } from '@nestjs/common';
import { randomUUID } from 'crypto';

export async function createUsers(dto: CreateUsersDto): Promise<Users> {
  const candidate = await this.repository.findOne({
    where: { email: dto.email },
  });
  if (candidate) {
    throw new HttpException(
      'A user with this Email already exists',
      HttpStatus.BAD_REQUEST,
    );
  }

  await setPasswordToUser(dto);

  const id = randomUUID();
  const user: Users = await this.repository.create({ id: id, ...dto });

  const role = await this.rolesService.findByName(ROLES.USER);
  await user.$set('roles', [role.id]);

  return user;
}

async function setPasswordToUser(dto) {
  dto.password = await bcrypt.hash(dto.password, 6);
}
