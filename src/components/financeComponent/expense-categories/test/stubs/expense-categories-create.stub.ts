import { CreateExpenseCategoriesDto } from '../../dto/create-expense-categories.dto';

export const expenseCategoriesCreateStub = (): CreateExpenseCategoriesDto => {
  return <CreateExpenseCategoriesDto>{
    name: 'expense',
    userEmail: 'user@gmail.com',
  };
};
