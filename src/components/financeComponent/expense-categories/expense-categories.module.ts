import { Module } from '@nestjs/common';
import { ExpenseCategoriesService } from './expense-categories.service';
import { ExpenseCategoriesController } from './expense-categories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExpenseCategories } from './models/expense-categories.model';
import { UsersModule } from '../../usersComponent/users/users.module';

@Module({
  providers: [ExpenseCategoriesService],
  controllers: [ExpenseCategoriesController],
  imports: [
    SequelizeModule.forFeature([ExpenseCategories]),
    UsersModule,
  ],
  exports: [SequelizeModule, ExpenseCategoriesService],
})
export class ExpenseCategoriesModule {}
