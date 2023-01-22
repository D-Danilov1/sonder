import { Module } from '@nestjs/common';
import { IncomeCategoriesService } from './income-categories.service';
import { IncomeCategoriesController } from './income-categories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { IncomeCategories } from './models/income-categories.model';
import { UsersModule } from '../../usersComponent/users/users.module';

@Module({
  providers: [IncomeCategoriesService],
  controllers: [IncomeCategoriesController],
  imports: [
    SequelizeModule.forFeature([IncomeCategories]),
    UsersModule,
  ],
  exports: [SequelizeModule, IncomeCategoriesService],
})
export class IncomeCategoriesModule {}
