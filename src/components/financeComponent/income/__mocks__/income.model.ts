import { incomeStub } from '../test/stubs/income.stub';

export const IncomeModel = {
  create: jest.fn().mockImplementation(() => {
    return incomeStub();
  }),
  findAll: jest.fn().mockImplementation(() => {
    return [incomeStub()];
  }),
  findOne: jest.fn().mockImplementation(() => {
    return incomeStub();
  }),
  findByPk: jest.fn().mockImplementation(() => {
    return incomeStub();
  }),
  update: jest.fn().mockImplementation(() => {
    return 1;
  }),
  destroy: jest.fn().mockImplementation(() => {
    return 1;
  }),
};
