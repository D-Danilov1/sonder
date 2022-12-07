import { usersCategoriesStub } from '../test/stubs/users-categories.stub';

export const UsersCategoriesService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(usersCategoriesStub()),
  findAll: jest.fn().mockResolvedValue([usersCategoriesStub()]),
  findByPk: jest.fn().mockResolvedValue(usersCategoriesStub()),
  findByName: jest.fn().mockResolvedValue(usersCategoriesStub()),
  update: jest.fn().mockResolvedValue({ affectedCount: 1 }),
  destroy: jest.fn().mockResolvedValue(1),
});
