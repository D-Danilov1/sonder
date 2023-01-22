import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Expense } from './models/expense.model';
import { UsersModule } from '../../usersComponent/users/users.module';

@Module({
  providers: [ExpenseService],
  controllers: [ExpenseController],
  imports: [
    SequelizeModule.forFeature([Expense]),
    UsersModule,
  ],
  exports: [SequelizeModule, ExpenseService],
})
export class ExpenseModule {}
