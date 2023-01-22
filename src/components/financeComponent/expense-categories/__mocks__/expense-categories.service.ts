import { expenseCategoriesStub } from '../test/stubs/expense-categories.stub';

export const ExpenseCategoriesService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(expenseCategoriesStub()),
  findAll: jest.fn().mockResolvedValue([expenseCategoriesStub()]),
  findByPk: jest.fn().mockResolvedValue(expenseCategoriesStub()),
  update: jest.fn().mockResolvedValue({affectedCount: 1}),
  destroy: jest.fn().mockResolvedValue(1),
});
