import { UpdateUsersCategoriesDto } from '../../dto/update-users-categories.dto';

export const usersCategoriesUpdateStub = (): UpdateUsersCategoriesDto => {
  return <UpdateUsersCategoriesDto>{
    id: 1,
    name: 'DOCTOR',
  };
};
