import { incomeStub } from '../test/stubs/income.stub';

export const IncomeService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(incomeStub()),
  findAll: jest.fn().mockResolvedValue([incomeStub()]),
  findByPk: jest.fn().mockResolvedValue(incomeStub()),
  update: jest.fn().mockResolvedValue({affectedCount: 1}),
  destroy: jest.fn().mockResolvedValue(1),
});
