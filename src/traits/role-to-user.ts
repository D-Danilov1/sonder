import { HttpException, HttpStatus } from '@nestjs/common';
import { RoleToUserDto } from '../components/usersComponent/users/dto/role-to-user.dto';

export async function addRoleToUser(dto: RoleToUserDto) {
  const user = await this.repository.findOne({
    where: { email: dto.userEmail },
  });
  const role = await this.rolesService.findByName(dto.roleName);
  if (user && role) {
    return await user.$add('roles', role.id);
  }
  throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
}

export async function removeRoleToUser(dto: RoleToUserDto) {
  const user = await this.repository.findOne({
    where: { email: dto.userEmail },
  });
  const role = await this.rolesService.findByName(dto.roleName);
  if (user && role) {
    return await user.$remove('roles', role.id);
  }
  throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
}
