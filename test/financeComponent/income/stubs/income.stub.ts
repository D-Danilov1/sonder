import { Income } from '../../../../src/components/financeComponent/income/models/income.model';

export const incomeStub = (): Income => {
  return <Income>{
    id: expect.any(Number),
    sum: expect.any(Number),
    user_id: expect.any(String),
    income_category_id: expect.any(Number),
    comment: expect.any(String),
    date: expect.any(String),
    createdAt: expect.any(String),
    updatedAt: expect.any(String),
  };
};
