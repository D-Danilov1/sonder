import { CreateFundsDto } from '../../../../src/components/financeComponent/funds/dto/create-funds.dto';

export const fundsCreateStub = (): CreateFundsDto =>
  <CreateFundsDto>{
    name: 'Test' + Date.now(),
    userEmail: 'admin@gmail.com'
  };
