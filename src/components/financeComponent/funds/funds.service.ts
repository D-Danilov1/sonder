import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Funds } from './models/funds.model';
import { EntityService } from '../../../classes/core/entity.service';
import { findByName } from '../../../traits/find-by.trait';
import { CreateFundsDto } from './dto/create-funds.dto';
import { Users } from '../../usersComponent/users/models/users.model';
import { UsersService } from '../../usersComponent/users/users.service';

@Injectable()
export class FundsService extends EntityService<Funds> {
  constructor(
    @InjectModel(Funds) protected repository: typeof Funds,
    private usersService: UsersService,
  ) {
    super(repository);
  }

  async create(dto: CreateFundsDto): Promise<Funds> {
    const user: Users = await this.usersService.findByEmail(dto.userEmail);
    return await this.repository.create({...dto, user_id: user.id});
  }

  findByName = findByName;
}
