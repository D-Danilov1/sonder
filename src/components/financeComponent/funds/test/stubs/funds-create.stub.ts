import { CreateFundsDto } from '../../dto/create-funds.dto';
import { FUNDS } from '../../../../../constants/funds.constants';

export const fundsCreateStub = (): CreateFundsDto => {
  return <CreateFundsDto>{
    name: FUNDS.MAIN,
    userEmail: 'user@gmail.com',
    percent: 100,
  };
};
