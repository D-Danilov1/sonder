import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UsePipes } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { Expense } from './models/expense.model';
import { ValidationPipe } from '../../../pipes/validation.pipe';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ROLES } from '../../../constants/roles.constants';
import { RolesGuards } from '../../../decorators/roles-guards.decorator';

@Controller('/api/expense')
export class ExpenseController {
  constructor(private service: ExpenseService) {
  }

  @UsePipes(ValidationPipe)
  @RolesGuards([ROLES.ADMIN])
  @Post()
  async create(
    @Body() dto: CreateExpenseDto,
  ): Promise<{response: Expense; statusCode: HttpStatus.CREATED}> {
    return {
      statusCode: HttpStatus.CREATED,
      response: await this.service.create(dto),
    };
  }

  @RolesGuards([ROLES.ADMIN])
  @Get()
  async findAll(): Promise<{response: Expense[]; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findAll(),
    };
  }

  @RolesGuards([ROLES.ADMIN])
  @Get('/:id')
  async findByPk(
    @Param('id') id: number,
  ): Promise<{response: Expense; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findByPk(id),
    };
  }

  @UsePipes(ValidationPipe)
  @RolesGuards([ROLES.ADMIN])
  @Put()
  async update(
    @Body() dto: UpdateExpenseDto,
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
