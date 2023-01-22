import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { ExpenseModel } from '../__mocks__/expense.model';
import { expenseStub } from './stubs/expense.stub';
import { ExpenseService } from '../expense.service';
import { Expense } from '../models/expense.model';
import { expenseCreateStub } from './stubs/expense-create.stub';
import { expenseUpdateStub } from './stubs/expense-update.stub';
import { mockUsersService } from '../__mocks__/users.service';
import { UsersService } from '../../../usersComponent/users/users.service';

describe('ExpenseService', () => {
  let service: ExpenseService;
  let model: typeof Expense;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ExpenseService,
        {
          provide: getModelToken(Expense),
          useValue: ExpenseModel,
        },
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    service = module.get<ExpenseService>(ExpenseService);
    model = module.get<typeof Expense>(getModelToken(Expense));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(service.create).toBeDefined();
    });

    describe('when create is called', () => {
      let expense: Expense;

      beforeEach(async () => {
        expense = await service.create(expenseCreateStub());
      });

      it('should call model create', () => {
        expect(model.create).toBeCalled();
      });

      it('should return a expense', () => {
        expect(expense).toBeDefined();
      });
    });
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(service.findAll).toBeDefined();
    });

    describe('when findAll is called', () => {
      let expense: Expense[];

      beforeEach(async () => {
        expense = await service.findAll();
      });

      it('should call model findAll', () => {
        expect(model.findAll).toBeCalled();
      });

      it('should return a expense', () => {
        expect(expense).toEqual([expenseStub()]);
      });
    });
  });

  describe('findByPk', () => {
    it('should be defined', () => {
      expect(service.findByPk).toBeDefined();
    });

    describe('when findByPk is called', () => {
      let expense: Expense;

      beforeEach(async () => {
        expense = await service.findByPk(expenseStub().id);
      });

      it('should call model findByPk', () => {
        expect(model.findByPk).toBeCalled();
      });

      it('should return a expense', () => {
        expect(expense).toEqual(expenseStub());
      });
    });
  });

  describe('update', () => {
    it('should be defined', () => {
      expect(service.update).toBeDefined();
    });

    describe('when update is called', () => {
      let result: number[];

      beforeEach(async () => {
        result = await service.update(expenseUpdateStub());
      });

      it('should call model update', () => {
        expect(model.update).toBeCalled();
      });

      it('should return a number of updated records', () => {
        expect(result).toEqual(1);
      });
    });
  });

  describe('destroy', () => {
    it('should be defined', () => {
      expect(service.destroy).toBeDefined();
    });

    describe('when destroy is called', () => {
      let result: number;

      beforeEach(async () => {
        result = await service.destroy(expenseStub().id);
      });

      it('should call model destroy', () => {
        expect(model.destroy).toBeCalled();
      });

      it('should return a number of deleted records', () => {
        expect(result).toEqual(1);
      });
    });
  });
});
