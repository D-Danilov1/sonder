import { UsersCategories } from '../../models/users-categories.model';

export const usersCategoriesStub = (): UsersCategories => {
  return <UsersCategories>{
    id: 1,
    name: 'DOCTOR',
  };
};
