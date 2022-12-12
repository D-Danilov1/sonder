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
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Users } from './models/users.model';
import { Roles } from '../authorization/decorators/roles-auth.decorator';
import { RolesGuard } from '../authorization/guards/roles.guard';
import { RoleToUserDto } from './dto/role-to-user.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { ValidationPipe } from '../../../pipes/validation.pipe';
import { ROLES } from '../../../constants/roles.constants';

@ApiTags('Users')
@Controller('/api/users')
export class UsersController {
  constructor(private service: UsersService) {}

  @ApiOperation({ summary: 'Creating a user' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Users })
  @UsePipes(ValidationPipe)
  @Post()
  async create(
    @Body() dto: CreateUsersDto,
  ): Promise<{ response: Users; statusCode: number }> {
    return {
      statusCode: HttpStatus.CREATED,
      response: await this.service.create(dto),
    };
  }

  @ApiOperation({ summary: 'Getting all users' })
  @ApiResponse({ status: HttpStatus.OK, type: [Users] })
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Get()
  async findAll(): Promise<{ response: Users[]; statusCode: number }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findAll(),
    };
  }

  @ApiOperation({ summary: 'Getting user by ID' })
  @ApiResponse({ status: HttpStatus.OK, type: Users })
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Get('/:id')
  async findByPk(
    @Param('id') id: string,
  ): Promise<{ response: Users; statusCode: number }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findByPk(id),
    };
  }

  @ApiOperation({ summary: 'Getting user by email' })
  @ApiResponse({ status: HttpStatus.OK, type: Users })
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Get('/email/:email')
  async findByEmail(
    @Param('email') email: string,
  ): Promise<{ response: Users; statusCode: number }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findByEmail(email),
    };
  }

  @ApiOperation({ summary: 'Updating user' })
  @ApiResponse({ status: HttpStatus.OK, type: [Number] })
  @UsePipes(ValidationPipe)
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Put()
  async update(
    @Body() dto: UpdateUsersDto,
  ): Promise<{ response: number[]; statusCode: number }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.update(dto),
    };
  }

  @ApiOperation({ summary: 'Deleting user' })
  @ApiResponse({ status: HttpStatus.OK, type: Number })
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Delete('/:id')
  async destroy(
    @Param('id') id: string,
  ): Promise<{ response: number; statusCode: number }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.destroy(id),
    };
  }

  @ApiOperation({ summary: 'Adding a role for a user' })
  @ApiResponse({ status: HttpStatus.OK, type: Users })
  @UsePipes(ValidationPipe)
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Put('/add/role')
  async addRoleToUser(
    @Body() dto: RoleToUserDto,
  ): Promise<{ response: unknown; statusCode: HttpStatus }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.addRoleToUser(dto),
    };
  }

  @ApiOperation({ summary: 'Removing a role from a user' })
  @ApiResponse({ status: HttpStatus.OK, type: Number })
  @UsePipes(ValidationPipe)
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Delete('/remove/role')
  async removeRoleToUser(
    @Body() dto: RoleToUserDto,
  ): Promise<{ response: number; statusCode: number }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.removeRoleToUser(dto),
    };
  }
}
