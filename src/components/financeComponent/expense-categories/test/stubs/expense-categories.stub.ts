import { ExpenseCategories } from '../../models/expense-categories.model';

export const expenseCategoriesStub = (): ExpenseCategories => {
  return <ExpenseCategories>{
    id: 1,
    name: 'expense',
    user_id: '4b6bea0b-62d4-40a9-a350-ae40632dc15f',
    is_active: true,
    is_system: true,
  };
};
