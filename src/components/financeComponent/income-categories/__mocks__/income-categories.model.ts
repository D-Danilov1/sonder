import { incomeCategoriesStub } from '../test/stubs/income-categories.stub';

export const IncomeCategoriesModel = {
  create: jest.fn().mockImplementation(() => {
    return incomeCategoriesStub();
  }),
  findAll: jest.fn().mockImplementation(() => {
    return [incomeCategoriesStub()];
  }),
  findOne: jest.fn().mockImplementation(() => {
    return incomeCategoriesStub();
  }),
  findByPk: jest.fn().mockImplementation(() => {
    return incomeCategoriesStub();
  }),
  update: jest.fn().mockImplementation(() => {
    return 1;
  }),
  destroy: jest.fn().mockImplementation(() => {
    return 1;
  }),
};
