import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UsePipes } from '@nestjs/common';
import { IncomeService } from './income.service';
import { Income } from './models/income.model';
import { ValidationPipe } from '../../../pipes/validation.pipe';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { ROLES } from '../../../constants/roles.constants';
import { RolesGuards } from '../../../decorators/roles-guards.decorator';

@Controller('/api/income')
export class IncomeController {
  constructor(private service: IncomeService) {
  }

  @UsePipes(ValidationPipe)
  @RolesGuards([ROLES.ADMIN])
  @Post()
  async create(
    @Body() dto: CreateIncomeDto,
  ): Promise<{response: Income; statusCode: HttpStatus.CREATED}> {
    return {
      statusCode: HttpStatus.CREATED,
      response: await this.service.create(dto),
    };
  }

  @RolesGuards([ROLES.ADMIN])
  @Get()
  async findAll(): Promise<{response: Income[]; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findAll(),
    };
  }

  @RolesGuards([ROLES.ADMIN])
  @Get('/:id')
  async findByPk(
    @Param('id') id: number,
  ): Promise<{response: Income; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findByPk(id),
    };
  }

  @UsePipes(ValidationPipe)
  @RolesGuards([ROLES.ADMIN])
  @Put()
  async update(
    @Body() dto: UpdateIncomeDto,
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
