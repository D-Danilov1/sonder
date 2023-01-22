import { CreateExpenseCategoriesDto } from '../../../../src/components/financeComponent/expense-categories/dto/create-expense-categories.dto';

export const expenseCategoriesCreateStub = (): CreateExpenseCategoriesDto => {
  return <CreateExpenseCategoriesDto>{
    name: 'Test' + Date.now(),
    userEmail: 'admin@gmail.com',
  };
};
