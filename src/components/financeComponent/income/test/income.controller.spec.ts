import { Test } from '@nestjs/testing';
import { incomeStub } from './stubs/income.stub';
import { JwtService } from '@nestjs/jwt';
import { IncomeController } from '../income.controller';
import { IncomeService } from '../income.service';
import { Income } from '../models/income.model';
import { incomeCreateStub } from './stubs/income-create.stub';
import { incomeUpdateStub } from './stubs/income-update.stub';

jest.mock('../income.service');

describe('IncomeController', () => {
  let controller: IncomeController;
  let service: IncomeService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [IncomeController],
      providers: [
        IncomeService,
        {
          provide: JwtService,
          useValue: JwtService,
        },
      ],
    }).compile();

    controller = module.get<IncomeController>(IncomeController);
    service = module.get<IncomeService>(IncomeService);
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(service.create).toBeDefined();
    });

    describe('when create is called', () => {
      let fund: Income;

      beforeEach(async () => {
        fund = (await controller.create(incomeCreateStub())).response;
      });

      it('should call incomeService', () => {
        expect(service.create).toBeCalledWith(incomeCreateStub());
      });

      it('should return a fund', () => {
        expect(fund).toEqual(incomeStub());
      });
    });
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(service.findAll).toBeDefined();
    });

    describe('when findAll is called', () => {
      let income: Income[];

      beforeEach(async () => {
        income = (await controller.findAll()).response;
      });

      it('should call incomeService', () => {
        expect(service.findAll).toBeCalledWith();
      });

      it('should return a income', () => {
        expect(income).toEqual([incomeStub()]);
      });
    });
  });

  describe('findByPk', () => {
    it('should be defined', () => {
      expect(service.findByPk).toBeDefined();
    });

    describe('when findByPk is called', () => {
      let fund: Income;

      beforeEach(async () => {
        fund = (await controller.findByPk(incomeStub().id)).response;
      });

      it('should call incomeService', () => {
        expect(service.findByPk).toBeCalledWith(incomeStub().id);
      });

      it('should return a fund', () => {
        expect(fund).toEqual(incomeStub());
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
        result = (await controller.update(incomeUpdateStub())).response;
      });

      it('should call incomeService', () => {
        expect(service.update).toBeCalledWith(incomeUpdateStub());
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
        result = (await controller.destroy(incomeStub().id)).response;
      });

      it('should call incomeService', () => {
        expect(service.destroy).toBeCalledWith(incomeStub().id);
      });

      it('should return a affected count', () => {
        expect(result).toEqual(1);
      });
    });
  });
});
