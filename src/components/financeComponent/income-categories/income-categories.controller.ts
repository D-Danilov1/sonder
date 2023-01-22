import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UsePipes } from '@nestjs/common';
import { IncomeCategoriesService } from './income-categories.service';
import { IncomeCategories } from './models/income-categories.model';
import { ValidationPipe } from '../../../pipes/validation.pipe';
import { CreateIncomeCategoriesDto } from './dto/create-income-categories.dto';
import { UpdateIncomeCategoriesDto } from './dto/update-income-categories.dto';
import { ROLES } from '../../../constants/roles.constants';
import { RolesGuards } from '../../../decorators/roles-guards.decorator';

@Controller('/api/income-categories')
export class IncomeCategoriesController {
  constructor(private service: IncomeCategoriesService) {
  }

  @UsePipes(ValidationPipe)
  @RolesGuards([ROLES.ADMIN])
  @Post()
  async create(
    @Body() dto: CreateIncomeCategoriesDto,
  ): Promise<{response: IncomeCategories; statusCode: HttpStatus.CREATED}> {
    return {
      statusCode: HttpStatus.CREATED,
      response: await this.service.create(dto),
    };
  }

  @RolesGuards([ROLES.ADMIN])
  @Get()
  async findAll(): Promise<{response: IncomeCategories[]; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findAll(),
    };
  }

  @RolesGuards([ROLES.ADMIN])
  @Get('/:id')
  async findByPk(
    @Param('id') id: number,
  ): Promise<{response: IncomeCategories; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findByPk(id),
    };
  }

  @UsePipes(ValidationPipe)
  @RolesGuards([ROLES.ADMIN])
  @Put()
  async update(
    @Body() dto: UpdateIncomeCategoriesDto,
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
