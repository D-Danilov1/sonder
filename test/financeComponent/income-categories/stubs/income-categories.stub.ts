import { IncomeCategories } from '../../../../src/components/financeComponent/income-categories/models/income-categories.model';

export const incomeCategoriesStub = (): IncomeCategories => {
  return <IncomeCategories>{
    id: expect.any(Number),
    name: expect.any(String),
    user_id: expect.any(String),
    is_active: expect.any(Boolean),
    is_system: expect.any(Boolean),
    createdAt: expect.any(String),
    updatedAt: expect.any(String),
  };
};
