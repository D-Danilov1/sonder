import { Module } from '@nestjs/common';
import { FundsService } from './funds.service';
import { FundsController } from './funds.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Funds } from './models/funds.model';
import { UsersModule } from '../../usersComponent/users/users.module';

@Module({
  providers: [FundsService],
  controllers: [FundsController],
  imports: [
    SequelizeModule.forFeature([Funds]),
    UsersModule,
  ],
  exports: [SequelizeModule, FundsService],
})
export class FundsModule {}
