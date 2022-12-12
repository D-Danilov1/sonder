import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../authorization/decorators/roles-auth.decorator';
import { RolesGuard } from '../authorization/guards/roles.guard';
import { ValidationPipe } from '../../../pipes/validation.pipe';
import { UsersCategoriesService } from './users-categories.service';
import { UsersCategories } from './models/users-categories.model';
import { CreateUsersCategoriesDto } from './dto/create-users-categories.dto';
import { UpdateUsersCategoriesDto } from './dto/update-users-categories.dto';
import { ROLES } from '../../../constants/roles.constants';
import { EntityModel } from '../../../database/entity.model';

@ApiTags('UsersCategories')
@Controller('/api/users-categories')
export class UsersCategoriesController {
  constructor(private service: UsersCategoriesService) {}

  @ApiOperation({ summary: 'Creating a users category' })
  @ApiResponse({ status: HttpStatus.CREATED, type: UsersCategories })
  @UsePipes(ValidationPipe)
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Post()
  async create(
    @Body() dto: CreateUsersCategoriesDto,
  ): Promise<{ response: EntityModel<UsersCategories>; statusCode: number }> {
    return {
      statusCode: HttpStatus.CREATED,
      response: await this.service.create(dto),
    };
  }

  @ApiOperation({ summary: 'Getting all users categories' })
  @ApiResponse({ status: HttpStatus.OK, type: [UsersCategories] })
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Get()
  async findAll(): Promise<{
    response: UsersCategories[];
    statusCode: number;
  }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findAll(),
    };
  }

  @ApiOperation({ summary: 'Getting users category by ID' })
  @ApiResponse({ status: HttpStatus.OK, type: UsersCategories })
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Get('/:id')
  async findByPk(
    @Param('id') id: number,
  ): Promise<{ response: UsersCategories; statusCode: number }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findByPk(id),
    };
  }

  @ApiOperation({ summary: 'Getting users category by name' })
  @ApiResponse({ status: HttpStatus.OK, type: UsersCategories })
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Get('/name/:name')
  async findByName(
    @Param('name') name: string,
  ): Promise<{ response: UsersCategories; statusCode: number }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findByName(name),
    };
  }

  @ApiOperation({ summary: 'Updating users category' })
  @ApiResponse({ status: HttpStatus.OK, type: Number })
  @UsePipes(ValidationPipe)
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Put()
  async update(
    @Body() dto: UpdateUsersCategoriesDto,
  ): Promise<{ response: number[]; statusCode: number }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.update(dto),
    };
  }

  @ApiOperation({ summary: 'Deleting users category' })
  @ApiResponse({ status: HttpStatus.OK })
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Delete('/:id')
  async destroy(
    @Param('id') id: number,
  ): Promise<{ response: number; statusCode: number }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.destroy(id),
    };
  }
}
