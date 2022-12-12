import { UsersCategories } from '../../../../src/components/usersComponent/users-categories/models/users-categories.model';

export const usersCategoriesStub = (): UsersCategories => {
  return <UsersCategories>{
    id: expect.any(Number),
    name: expect.any(String),
    createdAt: expect.any(String),
    updatedAt: expect.any(String),
  };
};
