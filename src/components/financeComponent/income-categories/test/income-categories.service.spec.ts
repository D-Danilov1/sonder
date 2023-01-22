import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { IncomeCategoriesModel } from '../__mocks__/income-categories.model';
import { incomeCategoriesStub } from './stubs/income-categories.stub';
import { IncomeCategoriesService } from '../income-categories.service';
import { IncomeCategories } from '../models/income-categories.model';
import { incomeCategoriesCreateStub } from './stubs/income-categories-create.stub';
import { incomeCategoriesUpdateStub } from './stubs/income-categories-update.stub';
import { UsersService } from '../../../usersComponent/users/users.service';
import { mockUsersService } from '../../funds/__mocks__/users.service';

describe('IncomeCategoriesService', () => {
  let service: IncomeCategoriesService;
  let model: typeof IncomeCategories;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        IncomeCategoriesService,
        {
          provide: getModelToken(IncomeCategories),
          useValue: IncomeCategoriesModel,
        },
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    service = module.get<IncomeCategoriesService>(IncomeCategoriesService);
    model = module.get<typeof IncomeCategories>(getModelToken(IncomeCategories));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(service.create).toBeDefined();
    });

    describe('when create is called', () => {
      let incomeCategory: IncomeCategories;

      beforeEach(async () => {
        incomeCategory = await service.create(incomeCategoriesCreateStub());
      });

      it('should call model create', () => {
        expect(model.create).toBeCalled();
      });

      it('should return a incomeCategory', () => {
        expect(incomeCategory).toBeDefined();
      });
    });
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(service.findAll).toBeDefined();
    });

    describe('when findAll is called', () => {
      let incomeCategories: IncomeCategories[];

      beforeEach(async () => {
        incomeCategories = await service.findAll();
      });

      it('should call model findAll', () => {
        expect(model.findAll).toBeCalled();
      });

      it('should return a incomeCategories', () => {
        expect(incomeCategories).toEqual([incomeCategoriesStub()]);
      });
    });
  });

  describe('findByPk', () => {
    it('should be defined', () => {
      expect(service.findByPk).toBeDefined();
    });

    describe('when findByPk is called', () => {
      let incomeCategory: IncomeCategories;

      beforeEach(async () => {
        incomeCategory = await service.findByPk(incomeCategoriesStub().id);
      });

      it('should call model findByPk', () => {
        expect(model.findByPk).toBeCalled();
      });

      it('should return a incomeCategory', () => {
        expect(incomeCategory).toEqual(incomeCategoriesStub());
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
        result = await service.update(incomeCategoriesUpdateStub());
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
        result = await service.destroy(incomeCategoriesStub().id);
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
