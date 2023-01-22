import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { ExpenseCategoriesModel } from '../__mocks__/expense-categories.model';
import { expenseCategoriesStub } from './stubs/expense-categories.stub';
import { ExpenseCategoriesService } from '../expense-categories.service';
import { ExpenseCategories } from '../models/expense-categories.model';
import { expenseCategoriesCreateStub } from './stubs/expense-categories-create.stub';
import { expenseCategoriesUpdateStub } from './stubs/expense-categories-update.stub';
import { UsersService } from '../../../usersComponent/users/users.service';
import { mockUsersService } from '../../funds/__mocks__/users.service';

describe('ExpenseCategoriesService', () => {
  let service: ExpenseCategoriesService;
  let model: typeof ExpenseCategories;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ExpenseCategoriesService,
        {
          provide: getModelToken(ExpenseCategories),
          useValue: ExpenseCategoriesModel,
        },
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    service = module.get<ExpenseCategoriesService>(ExpenseCategoriesService);
    model = module.get<typeof ExpenseCategories>(getModelToken(ExpenseCategories));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(service.create).toBeDefined();
    });

    describe('when create is called', () => {
      let expenseCategory: ExpenseCategories;

      beforeEach(async () => {
        expenseCategory = await service.create(expenseCategoriesCreateStub());
      });

      it('should call model create', () => {
        expect(model.create).toBeCalled();
      });

      it('should return a expenseCategory', () => {
        expect(expenseCategory).toBeDefined();
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
        expenseCategories = await service.findAll();
      });

      it('should call model findAll', () => {
        expect(model.findAll).toBeCalled();
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
        expenseCategory = await service.findByPk(expenseCategoriesStub().id);
      });

      it('should call model findByPk', () => {
        expect(model.findByPk).toBeCalled();
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
      let result: number[];

      beforeEach(async () => {
        result = await service.update(expenseCategoriesUpdateStub());
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
        result = await service.destroy(expenseCategoriesStub().id);
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
