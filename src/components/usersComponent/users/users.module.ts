import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './models/users.model';
import { Roles } from '../roles/models/roles.model';
import { UsersRoles } from '../many-to-many/users-roles.model';
import { RolesModule } from '../roles/roles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([Roles, Users, UsersRoles]),
    RolesModule,
  ],
  exports: [SequelizeModule, UsersService],
})
export class UsersModule {}
