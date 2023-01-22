import { Test } from '@nestjs/testing';
import { expenseCategoriesStub } from './stubs/expense-categories.stub';
import { JwtService } from '@nestjs/jwt';
import { ExpenseCategoriesController } from '../expense-categories.controller';
import { ExpenseCategoriesService } from '../expense-categories.service';
import { ExpenseCategories } from '../models/expense-categories.model';
import { expenseCategoriesCreateStub } from './stubs/expense-categories-create.stub';
import { expenseCategoriesUpdateStub } from './stubs/expense-categories-update.stub';

jest.mock('../expense-categories.service');

describe('ExpenseCategoriesController', () => {
  let controller: ExpenseCategoriesController;
  let service: ExpenseCategoriesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ExpenseCategoriesController],
      providers: [
        ExpenseCategoriesService,
        {
          provide: JwtService,
          useValue: JwtService,
        },
      ],
    }).compile();

    controller = module.get<ExpenseCategoriesController>(ExpenseCategoriesController);
    service = module.get<ExpenseCategoriesService>(ExpenseCategoriesService);
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(service.create).toBeDefined();
    });

    describe('when create is called', () => {
      let expenseCategory: ExpenseCategories;

      beforeEach(async () => {
        expenseCategory = (await controller.create(expenseCategoriesCreateStub())).response;
      });

      it('should call expenseCategoriesService', () => {
        expect(service.create).toBeCalledWith(expenseCategoriesCreateStub());
      });

      it('should return a expenseCategory', () => {
        expect(expenseCategory).toEqual(expenseCategoriesStub());
      });
    });
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(service.findAll).toBeDefined();
    });

    describe('when findAll is called', () => {
      let expenseCategories: ExpenseCategories[];

      beforeEach(async () => {
        expenseCategories = (await controller.findAll()).response;
      });

      it('should call expenseCategoriesService', () => {
        expect(service.findAll).toBeCalledWith();
      });

      it('should return a expenseCategories', () => {
        expect(expenseCategories).toEqual([expenseCategoriesStub()]);
      });
    });
  });

  describe('findByPk', () => {
    it('should be defined', () => {
      expect(service.findByPk).toBeDefined();
    });

    describe('when findByPk is called', () => {
      let expenseCategory: ExpenseCategories;

      beforeEach(async () => {
        expenseCategory = (await controller.findByPk(expenseCategoriesStub().id)).response;
      });

      it('should call expenseCategoriesService', () => {
        expect(service.findByPk).toBeCalledWith(expenseCategoriesStub().id);
      });

      it('should return a expenseCategory', () => {
        expect(expenseCategory).toEqual(expenseCategoriesStub());
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
        result = (await controller.update(expenseCategoriesUpdateStub())).response;
      });

      it('should call expenseCategoriesService', () => {
        expect(service.update).toBeCalledWith(expenseCategoriesUpdateStub());
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
        result = (await controller.destroy(expenseCategoriesStub().id)).response;
      });

      it('should call expenseCategoriesService', () => {
        expect(service.destroy).toBeCalledWith(expenseCategoriesStub().id);
      });

      it('should return a affected count', () => {
        expect(result).toEqual(1);
      });
    });
  });
});
