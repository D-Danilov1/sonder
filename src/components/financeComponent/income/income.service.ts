import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Income } from './models/income.model';
import { EntityService } from '../../../classes/core/entity.service';
import { CreateIncomeDto } from './dto/create-income.dto';
import { Users } from '../../usersComponent/users/models/users.model';
import { UsersService } from '../../usersComponent/users/users.service';

@Injectable()
export class IncomeService extends EntityService<Income> {
  constructor(
    @InjectModel(Income) protected repository: typeof Income,
    private usersService: UsersService,
  ) {
    super(repository);
  }

  async create(dto: CreateIncomeDto): Promise<Income> {
    const user: Users = await this.usersService.findByEmail(dto.userEmail);
    return await this.repository.create({...dto, user_id: user.id});
  }
}
