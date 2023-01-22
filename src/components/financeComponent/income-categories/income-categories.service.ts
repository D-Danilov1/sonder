import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EntityService } from '../../../classes/core/entity.service';
import { Users } from '../../usersComponent/users/models/users.model';
import { UsersService } from '../../usersComponent/users/users.service';
import { IncomeCategories } from './models/income-categories.model';
import { CreateIncomeCategoriesDto } from './dto/create-income-categories.dto';

@Injectable()
export class IncomeCategoriesService extends EntityService<IncomeCategories> {
  constructor(
    @InjectModel(IncomeCategories) protected repository: typeof IncomeCategories,
    private usersService: UsersService,
  ) {
    super(repository);
  }

  async create(dto: CreateIncomeCategoriesDto): Promise<IncomeCategories> {
    const user: Users = await this.usersService.findByEmail(dto.userEmail);
    return await this.repository.create({...dto, user_id: user.id});
  }
}
