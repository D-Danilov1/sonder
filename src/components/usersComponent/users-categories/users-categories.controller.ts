import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '../../../pipes/validation.pipe';
import { UsersCategoriesService } from './users-categories.service';
import { UsersCategories } from './models/users-categories.model';
import { CreateUsersCategoriesDto } from './dto/create-users-categories.dto';
import { UpdateUsersCategoriesDto } from './dto/update-users-categories.dto';
import { ROLES } from '../../../constants/roles.constants';
import { RolesGuards } from '../../../decorators/roles-guards.decorator';

@Controller('/api/users-categories')
export class UsersCategoriesController {
  constructor(private service: UsersCategoriesService) {
  }

  @UsePipes(ValidationPipe)
  @RolesGuards(ROLES.ADMIN)
  @Post()
  async create(
    @Body() dto: CreateUsersCategoriesDto,
  ): Promise<{response: UsersCategories; statusCode: number}> {
    return {
      statusCode: HttpStatus.CREATED,
      response: await this.service.create(dto),
    };
  }

  @RolesGuards(ROLES.ADMIN)
  @Get()
  async findAll(): Promise<{response: UsersCategories[]; statusCode: number;}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findAll(),
    };
  }

  @RolesGuards(ROLES.ADMIN)
  @Get('/:id')
  async findByPk(
    @Param('id') id: number,
  ): Promise<{response: UsersCategories; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findByPk(id),
    };
  }

  @RolesGuards(ROLES.ADMIN)
  @Get('/name/:name')
  async findByName(
    @Param('name') name: string,
  ): Promise<{response: UsersCategories; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findByName(name),
    };
  }

  @UsePipes(ValidationPipe)
  @RolesGuards(ROLES.ADMIN)
  @Put()
  async update(
    @Body() dto: UpdateUsersCategoriesDto,
  ): Promise<{response: number[]; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.update(dto),
    };
  }

  @RolesGuards(ROLES.ADMIN)
  @Delete('/:id')
  async destroy(
    @Param('id') id: number,
  ): Promise<{response: number; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.destroy(id),
    };
  }
}
