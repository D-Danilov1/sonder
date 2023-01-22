import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UsePipes } from '@nestjs/common';
import { ExpenseCategoriesService } from './expense-categories.service';
import { ExpenseCategories } from './models/expense-categories.model';
import { ValidationPipe } from '../../../pipes/validation.pipe';
import { CreateExpenseCategoriesDto } from './dto/create-expense-categories.dto';
import { UpdateExpenseCategoriesDto } from './dto/update-expense-categories.dto';
import { ROLES } from '../../../constants/roles.constants';
import { RolesGuards } from '../../../decorators/roles-guards.decorator';

@Controller('/api/expense-categories')
export class ExpenseCategoriesController {
  constructor(private service: ExpenseCategoriesService) {
  }

  @UsePipes(ValidationPipe)
  @RolesGuards([ROLES.ADMIN])
  @Post()
  async create(
    @Body() dto: CreateExpenseCategoriesDto,
  ): Promise<{response: ExpenseCategories; statusCode: HttpStatus.CREATED}> {
    return {
      statusCode: HttpStatus.CREATED,
      response: await this.service.create(dto),
    };
  }

  @RolesGuards([ROLES.ADMIN])
  @Get()
  async findAll(): Promise<{response: ExpenseCategories[]; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findAll(),
    };
  }

  @RolesGuards([ROLES.ADMIN])
  @Get('/:id')
  async findByPk(
    @Param('id') id: number,
  ): Promise<{response: ExpenseCategories; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findByPk(id),
    };
  }

  @UsePipes(ValidationPipe)
  @RolesGuards([ROLES.ADMIN])
  @Put()
  async update(
    @Body() dto: UpdateExpenseCategoriesDto,
  ): Promise<{response: number[]; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.update(dto),
    };
  }

  @RolesGuards([ROLES.ADMIN])
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
