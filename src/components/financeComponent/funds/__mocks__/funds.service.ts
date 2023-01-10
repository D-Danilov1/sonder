import { fundsStub } from '../test/stubs/funds.stub';

export const FundsService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(fundsStub()),
  findAll: jest.fn().mockResolvedValue([fundsStub()]),
  findByPk: jest.fn().mockResolvedValue(fundsStub()),
  findByName: jest.fn().mockResolvedValue(fundsStub()),
  update: jest.fn().mockResolvedValue({affectedCount: 1}),
  destroy: jest.fn().mockResolvedValue(1),
});
