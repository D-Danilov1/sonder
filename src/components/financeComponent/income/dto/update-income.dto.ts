import { IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';

export class UpdateIncomeDto {
  @IsNumber({}, {message: 'The value must be a number'})
  readonly id: number;

  @IsNumber({}, {message: 'The value must be a number'})
  @IsPositive({message: 'The value must be a positive number'})
  readonly sum: number;

  @IsUUID('4', {message: 'The value must be a UUID v4'})
  readonly user_id: string;

  @IsNumber({}, {message: 'The value must be a number'})
  @IsPositive({message: 'The value must be a positive number'})
  readonly income_category_id: number;

  @IsString({message: 'The value must be a string'})
  readonly comment: string;

  @IsString({message: 'The value must be a string'})
  readonly date: string;
}
