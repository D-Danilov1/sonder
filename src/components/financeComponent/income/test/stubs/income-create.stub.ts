import { CreateIncomeDto } from '../../dto/create-income.dto';

export const incomeCreateStub = (): CreateIncomeDto => {
  return <CreateIncomeDto>{
    sum: 100,
    userEmail: 'user@gmail.com',
    income_category_id: 1,
    comment: '',
    date: '2023-01-01 00:00:00',
  };
};
