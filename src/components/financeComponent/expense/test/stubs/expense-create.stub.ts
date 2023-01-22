import { CreateExpenseDto } from '../../dto/create-expense.dto';

export const expenseCreateStub = (): CreateExpenseDto => {
  return <CreateExpenseDto>{
    sum: 100,
    userEmail: 'user@gmail.com',
    expense_category_id: 1,
    fund_id: 1,
    comment: '',
    date: '2023-01-01 00:00:00',
  };
};
