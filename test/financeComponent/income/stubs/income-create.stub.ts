import { CreateIncomeDto } from '../../../../src/components/financeComponent/income/dto/create-income.dto';

export const incomeCreateStub = (): CreateIncomeDto => {
  return <CreateIncomeDto>{
    sum: 100,
    userEmail: 'admin@gmail.com',
    income_category_id: 1,
    comment: 'Test' + Date.now(),
    date: '2023-01-01 00:00:00',
  };
};
