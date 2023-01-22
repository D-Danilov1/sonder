import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Expense } from './models/expense.model';
import { EntityService } from '../../../classes/core/entity.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { Users } from '../../usersComponent/users/models/users.model';
import { UsersService } from '../../usersComponent/users/users.service';

@Injectable()
export class ExpenseService extends EntityService<Expense> {
  constructor(
    @InjectModel(Expense) protected repository: typeof Expense,
    private usersService: UsersService,
  ) {
    super(repository);
  }

  async create(dto: CreateExpenseDto): Promise<Expense> {
    const user: Users = await this.usersService.findByEmail(dto.userEmail);
    return await this.repository.create({...dto, user_id: user.id});
  }
}
