import { fundsStub } from '../test/stubs/funds.stub';

export const FundsModel = {
  create: jest.fn().mockImplementation(() => {
    return fundsStub();
  }),
  findAll: jest.fn().mockImplementation(() => {
    return [fundsStub()];
  }),
  findOne: jest.fn().mockImplementation(() => {
    return fundsStub();
  }),
  findByPk: jest.fn().mockImplementation(() => {
    return fundsStub();
  }),
  update: jest.fn().mockImplementation(() => {
    return 1;
  }),
  destroy: jest.fn().mockImplementation(() => {
    return 1;
  }),
};
