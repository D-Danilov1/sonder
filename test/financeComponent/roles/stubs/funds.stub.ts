import { Funds } from '../../../../src/components/financeComponent/funds/models/funds.model';

export const fundsStub = (): Funds => {
  return <Funds>{
    id: expect.any(Number),
    name: expect.any(String),
    user_id: expect.any(String),
    is_system: expect.any(Boolean),
    createdAt: expect.any(String),
    updatedAt: expect.any(String),
  };
};
