import { Test } from '@nestjs/testing';
import { expenseStub } from './stubs/expense.stub';
import { JwtService } from '@nestjs/jwt';
import { ExpenseController } from '../expense.controller';
import { ExpenseService } from '../expense.service';
import { Expense } from '../models/expense.model';
import { expenseCreateStub } from './stubs/expense-create.stub';
import { expenseUpdateStub } from './stubs/expense-update.stub';

jest.mock('../expense.service');

describe('ExpenseController', () => {
  let controller: ExpenseController;
  let service: ExpenseService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ExpenseController],
      providers: [
        ExpenseService,
        {
          provide: JwtService,
          useValue: JwtService,
        },
      ],
    }).compile();

    controller = module.get<ExpenseController>(ExpenseController);
    service = module.get<ExpenseService>(ExpenseService);
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(service.create).toBeDefined();
    });

    describe('when create is called', () => {
      let fund: Expense;

      beforeEach(async () => {
        fund = (await controller.create(expenseCreateStub())).response;
      });

      it('should call expenseService', () => {
        expect(service.create).toBeCalledWith(expenseCreateStub());
      });

      it('should return a fund', () => {
        expect(fund).toEqual(expenseStub());
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
        expense = (await controller.findAll()).response;
      });

      it('should call expenseService', () => {
        expect(service.findAll).toBeCalledWith();
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
      let fund: Expense;

      beforeEach(async () => {
        fund = (await controller.findByPk(expenseStub().id)).response;
      });

      it('should call expenseService', () => {
        expect(service.findByPk).toBeCalledWith(expenseStub().id);
      });

      it('should return a fund', () => {
        expect(fund).toEqual(expenseStub());
      });
    });
  });

  describe('update', () => {
    it('should be defined', () => {
      expect(service.update).toBeDefined();
    });

    describe('when update is called', () => {
      let result;

      beforeEach(async () => {
        result = (await controller.update(expenseUpdateStub())).response;
      });

      it('should call expenseService', () => {
        expect(service.update).toBeCalledWith(expenseUpdateStub());
      });

      it('should return a affected count', () => {
        expect(result).toEqual({affectedCount: 1});
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
        result = (await controller.destroy(expenseStub().id)).response;
      });

      it('should call expenseService', () => {
        expect(service.destroy).toBeCalledWith(expenseStub().id);
      });

      it('should return a affected count', () => {
        expect(result).toEqual(1);
      });
    });
  });
});
