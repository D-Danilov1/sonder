import { usersCategoriesStub } from '../test/stubs/users-categories.stub';

export const UsersCategoriesModel = {
  create: jest.fn().mockImplementation(() => {
    return usersCategoriesStub();
  }),
  findAll: jest.fn().mockImplementation(() => {
    return [usersCategoriesStub()];
  }),
  findOne: jest.fn().mockImplementation(() => {
    return usersCategoriesStub();
  }),
  findByPk: jest.fn().mockImplementation(() => {
    return usersCategoriesStub();
  }),
  update: jest.fn().mockImplementation(() => {
    return 1;
  }),
  destroy: jest.fn().mockImplementation(() => {
    return 1;
  }),
};
