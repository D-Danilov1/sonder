import { expenseStub } from '../test/stubs/expense.stub';

export const ExpenseService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(expenseStub()),
  findAll: jest.fn().mockResolvedValue([expenseStub()]),
  findByPk: jest.fn().mockResolvedValue(expenseStub()),
  update: jest.fn().mockResolvedValue({affectedCount: 1}),
  destroy: jest.fn().mockResolvedValue(1),
});
