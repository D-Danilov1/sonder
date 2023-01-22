import { Income } from '../../models/income.model';

export const incomeStub = (): Income => {
  return <Income>{
    id: 1,
    sum: 100,
    user_id: '4b6bea0b-62d4-40a9-a350-ae40632dc15f',
    income_category_id: 1,
    comment: '',
    date: '2023-01-01 00:00:00',
  };
};
