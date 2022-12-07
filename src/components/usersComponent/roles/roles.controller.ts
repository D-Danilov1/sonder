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
import { RolesService } from './roles.service';
import { Roles as Role } from './models/roles.model';
import { Roles } from '../authorization/decorators/roles-auth.decorator';
import { RolesGuard } from '../authorization/guards/roles.guard';
import { ValidationPipe } from '../../../pipes/validation.pipe';
import { CreateRolesDto } from './dto/create-roles.dto';
import { UpdateRolesDto } from './dto/update-roles.dto';
import { ROLES } from '../../../constants/roles.constants';

@ApiTags('Roles')
@Controller('/api/roles')
export class RolesController {
  constructor(private service: RolesService) {}

  @ApiOperation({ summary: 'Creating a role' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Role })
  @UsePipes(ValidationPipe)
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Post()
  async create(
    @Body() dto: CreateRolesDto,
  ): Promise<{ response: Role; statusCode: number }> {
    return {
      statusCode: HttpStatus.CREATED,
      response: await this.service.create(dto),
    };
  }

  @ApiOperation({ summary: 'Getting all roles' })
  @ApiResponse({ status: HttpStatus.OK, type: [Role] })
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Get()
  async findAll(): Promise<{ response: Role[]; statusCode: number }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findAll(),
    };
  }

  @ApiOperation({ summary: 'Getting role by ID' })
  @ApiResponse({ status: HttpStatus.OK, type: Role })
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Get('/:id')
  async findByPk(
    @Param('id') id: number,
  ): Promise<{ response: Role; statusCode: number }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findByPk(id),
    };
  }

  @ApiOperation({ summary: 'Getting role by name' })
  @ApiResponse({ status: HttpStatus.OK, type: Role })
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Get('/name/:name')
  async findByName(
    @Param('name') name: string,
  ): Promise<{ response: Role; statusCode: number }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.findByName(name),
    };
  }

  @ApiOperation({ summary: 'Updating role' })
  @ApiResponse({ status: HttpStatus.OK, type: Number })
  @UsePipes(ValidationPipe)
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Put()
  async update(
    @Body() dto: UpdateRolesDto,
  ): Promise<{ response: number[]; statusCode: number }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.update(dto),
    };
  }

  @ApiOperation({ summary: 'Deleting role' })
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
