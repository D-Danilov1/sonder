import { incomeCategoriesStub } from '../test/stubs/income-categories.stub';

export const IncomeCategoriesService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(incomeCategoriesStub()),
  findAll: jest.fn().mockResolvedValue([incomeCategoriesStub()]),
  findByPk: jest.fn().mockResolvedValue(incomeCategoriesStub()),
  update: jest.fn().mockResolvedValue({affectedCount: 1}),
  destroy: jest.fn().mockResolvedValue(1),
});
