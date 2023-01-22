import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EntityService } from '../../../classes/core/entity.service';
import { Users } from '../../usersComponent/users/models/users.model';
import { UsersService } from '../../usersComponent/users/users.service';
import { ExpenseCategories } from './models/expense-categories.model';
import { CreateExpenseCategoriesDto } from './dto/create-expense-categories.dto';

@Injectable()
export class ExpenseCategoriesService extends EntityService<ExpenseCategories> {
  constructor(
    @InjectModel(ExpenseCategories) protected repository: typeof ExpenseCategories,
    private usersService: UsersService,
  ) {
    super(repository);
  }

  async create(dto: CreateExpenseCategoriesDto): Promise<ExpenseCategories> {
    const user: Users = await this.usersService.findByEmail(dto.userEmail);
    return await this.repository.create({...dto, user_id: user.id});
  }
}
