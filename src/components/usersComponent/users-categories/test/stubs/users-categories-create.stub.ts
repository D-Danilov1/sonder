import { CreateUsersCategoriesDto } from '../../dto/create-users-categories.dto';

export const usersCategoriesCreateStub = (): CreateUsersCategoriesDto => {
  return <CreateUsersCategoriesDto>{
    name: 'DOCTOR',
  };
};
