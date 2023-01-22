import { IncomeCategories } from '../../models/income-categories.model';

export const incomeCategoriesStub = (): IncomeCategories => {
  return <IncomeCategories>{
    id: 1,
    name: 'income',
    user_id: '4b6bea0b-62d4-40a9-a350-ae40632dc15f',
    is_active: true,
    is_system: true,
  };
};
