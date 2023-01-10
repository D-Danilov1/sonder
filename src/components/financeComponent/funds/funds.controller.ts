import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UsePipes } from '@nestjs/common';
import { FundsService } from './funds.service';
import { Funds } from './models/funds.model';
import { ValidationPipe } from '../../../pipes/validation.pipe';
import { CreateFundsDto } from './dto/create-funds.dto';
import { UpdateFundsDto } from './dto/update-funds.dto';
import { ROLES } from '../../../constants/roles.constants';
import { RolesGuards } from '../../../decorators/roles-guards.decorator';

@Controller('/api/funds')
export class FundsController {
  constructor(private service: FundsService) {
  }

  @UsePipes(ValidationPipe)
  @RolesGuards([ROLES.ADMIN])
  @Post()
  async create(
    @Body() dto: CreateFundsDto,
  ): Promise<{response: Funds; statusCode: HttpStatus.CREATED}> {
    return {
      statusCode: HttpStatus.CREATED,
      response: await this.service.create(dto),
    };
  }

  @RolesGuards([ROLES.ADMIN])
  @Get()
  async findAll(): Promise<{response: Funds[]; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findAll(),
    };
  }

  @RolesGuards([ROLES.ADMIN])
  @Get('/:id')
  async findByPk(
    @Param('id') id: number,
  ): Promise<{response: Funds; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findByPk(id),
    };
  }

  @RolesGuards([ROLES.ADMIN])
  @Get('/name/:name')
  async findByName(
    @Param('name') name: string,
  ): Promise<{response: Funds; statusCode: number}> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findByName(name),
    };
  }

  @UsePipes(ValidationPipe)
  @RolesGuards([ROLES.ADMIN])
  @Put()
  async update(
    @Body() dto: UpdateFundsDto,
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
