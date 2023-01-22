import { CreateIncomeCategoriesDto } from '../../dto/create-income-categories.dto';

export const incomeCategoriesCreateStub = (): CreateIncomeCategoriesDto => {
  return <CreateIncomeCategoriesDto>{
    name: 'income',
    userEmail: 'user@gmail.com',
  };
};
