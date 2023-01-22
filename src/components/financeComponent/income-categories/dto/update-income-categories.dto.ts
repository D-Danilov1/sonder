import { IsBoolean, IsNumber, IsString, IsUUID, Length } from 'class-validator';

export class UpdateIncomeCategoriesDto {
  @IsNumber({}, {message: 'The value must be a number'})
  readonly id: number;

  @IsString({message: 'The value must be a string'})
  @Length(2, 128, {message: 'The name must be at least 2 and no more than 128 characters'})
  readonly name: string;

  @IsUUID('4', {message: 'The value must be a UUID v4'})
  readonly user_id: string;

  @IsBoolean({message: 'The value must be a boolean'})
  readonly is_active: boolean;

  @IsBoolean({message: 'The value must be a boolean'})
  readonly is_system: boolean;
}
