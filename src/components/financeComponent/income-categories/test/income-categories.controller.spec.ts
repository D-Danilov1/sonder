import { Test } from '@nestjs/testing';
import { incomeCategoriesStub } from './stubs/income-categories.stub';
import { JwtService } from '@nestjs/jwt';
import { IncomeCategoriesController } from '../income-categories.controller';
import { IncomeCategoriesService } from '../income-categories.service';
import { IncomeCategories } from '../models/income-categories.model';
import { incomeCategoriesCreateStub } from './stubs/income-categories-create.stub';
import { incomeCategoriesUpdateStub } from './stubs/income-categories-update.stub';

jest.mock('../income-categories.service');

describe('IncomeCategoriesController', () => {
  let controller: IncomeCategoriesController;
  let service: IncomeCategoriesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [IncomeCategoriesController],
      providers: [
        IncomeCategoriesService,
        {
          provide: JwtService,
          useValue: JwtService,
        },
      ],
    }).compile();

    controller = module.get<IncomeCategoriesController>(IncomeCategoriesController);
    service = module.get<IncomeCategoriesService>(IncomeCategoriesService);
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(service.create).toBeDefined();
    });

    describe('when create is called', () => {
      let incomeCategory: IncomeCategories;

      beforeEach(async () => {
        incomeCategory = (await controller.create(incomeCategoriesCreateStub())).response;
      });

      it('should call incomeCategoriesService', () => {
        expect(service.create).toBeCalledWith(incomeCategoriesCreateStub());
      });

      it('should return a incomeCategory', () => {
        expect(incomeCategory).toEqual(incomeCategoriesStub());
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
        incomeCategories = (await controller.findAll()).response;
      });

      it('should call incomeCategoriesService', () => {
        expect(service.findAll).toBeCalledWith();
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
        incomeCategory = (await controller.findByPk(incomeCategoriesStub().id)).response;
      });

      it('should call incomeCategoriesService', () => {
        expect(service.findByPk).toBeCalledWith(incomeCategoriesStub().id);
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
      let result;

      beforeEach(async () => {
        result = (await controller.update(incomeCategoriesUpdateStub())).response;
      });

      it('should call incomeCategoriesService', () => {
        expect(service.update).toBeCalledWith(incomeCategoriesUpdateStub());
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
        result = (await controller.destroy(incomeCategoriesStub().id)).response;
      });

      it('should call incomeCategoriesService', () => {
        expect(service.destroy).toBeCalledWith(incomeCategoriesStub().id);
      });

      it('should return a affected count', () => {
        expect(result).toEqual(1);
      });
    });
  });
});
