import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersCategoriesService } from './users-categories.service';
import { UsersCategoriesController } from './users-categories.controller';
import { UsersCategories } from './models/users-categories.model';

@Module({
  providers: [UsersCategoriesService],
  controllers: [UsersCategoriesController],
  imports: [SequelizeModule.forFeature([UsersCategories])],
  exports: [SequelizeModule, UsersCategoriesService],
})
export class UsersCategoriesModule {}
