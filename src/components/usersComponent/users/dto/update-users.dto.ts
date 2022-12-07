import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateUsersDto {
  @ApiProperty({
    example: '4b6bea0b-62d4-40a9-a350-ae40632dc15f',
    description: 'User ID',
  })
  @IsString({ message: 'The value must be a string' })
  readonly id: string;
}
