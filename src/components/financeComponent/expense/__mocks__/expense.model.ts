import { expenseStub } from '../test/stubs/expense.stub';

export const ExpenseModel = {
  create: jest.fn().mockImplementation(() => {
    return expenseStub();
  }),
  findAll: jest.fn().mockImplementation(() => {
    return [expenseStub()];
  }),
  findOne: jest.fn().mockImplementation(() => {
    return expenseStub();
  }),
  findByPk: jest.fn().mockImplementation(() => {
    return expenseStub();
  }),
  update: jest.fn().mockImplementation(() => {
    return 1;
  }),
  destroy: jest.fn().mockImplementation(() => {
    return 1;
  }),
};
