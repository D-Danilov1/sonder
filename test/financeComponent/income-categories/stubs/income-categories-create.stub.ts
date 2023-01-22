import { CreateIncomeCategoriesDto } from '../../../../src/components/financeComponent/income-categories/dto/create-income-categories.dto';

export const incomeCategoriesCreateStub = (): CreateIncomeCategoriesDto => {
  return <CreateIncomeCategoriesDto>{
    name: 'Test' + Date.now(),
    userEmail: 'admin@gmail.com',
  };
};
