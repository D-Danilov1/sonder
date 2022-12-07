import { CreateUsersCategoriesDto } from '../../../../src/components/usersComponent/users-categories/dto/create-users-categories.dto';

export const usersCategoriesCreateStub = (): CreateUsersCategoriesDto => {
  return <CreateUsersCategoriesDto>{
    name: 'Test' + Date.now(),
  };
};
