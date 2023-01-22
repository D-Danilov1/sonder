import { IsEmail, IsNumber, IsPositive, IsString, Length } from 'class-validator';

export class CreateExpenseDto {
  @IsNumber({}, {message: 'The value must be a number'})
  @IsPositive({message: 'The value must be a positive number'})
  readonly sum: number;

  @IsString({message: 'The value must be a string'})
  @IsEmail({}, {message: 'Incorrect Email'})
  @Length(6, 128, {message: 'The userEmail must be at least 6 and no more than 128 characters'})
  readonly userEmail: string;

  @IsNumber({}, {message: 'The value must be a number'})
  @IsPositive({message: 'The value must be a positive number'})
  expense_category_id: number;

  @IsNumber({}, {message: 'The value must be a number'})
  @IsPositive({message: 'The value must be a positive number'})
  fund_id: number;

  @IsString({message: 'The value must be a string'})
  readonly comment: string;

  @IsString({message: 'The value must be a string'})
  readonly date: string;
}
