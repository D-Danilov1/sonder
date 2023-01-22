import { Module } from '@nestjs/common';
import { IncomeService } from './income.service';
import { IncomeController } from './income.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Income } from './models/income.model';
import { UsersModule } from '../../usersComponent/users/users.module';

@Module({
  providers: [IncomeService],
  controllers: [IncomeController],
  imports: [
    SequelizeModule.forFeature([Income]),
    UsersModule,
  ],
  exports: [SequelizeModule, IncomeService],
})
export class IncomeModule {}
