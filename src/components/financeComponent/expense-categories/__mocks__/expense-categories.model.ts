import { expenseCategoriesStub } from '../test/stubs/expense-categories.stub';

export const ExpenseCategoriesModel = {
  create: jest.fn().mockImplementation(() => {
    return expenseCategoriesStub();
  }),
  findAll: jest.fn().mockImplementation(() => {
    return [expenseCategoriesStub()];
  }),
  findOne: jest.fn().mockImplementation(() => {
    return expenseCategoriesStub();
  }),
  findByPk: jest.fn().mockImplementation(() => {
    return expenseCategoriesStub();
  }),
  update: jest.fn().mockImplementation(() => {
    return 1;
  }),
  destroy: jest.fn().mockImplementation(() => {
    return 1;
  }),
};
