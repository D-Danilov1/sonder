import { Test } from '@nestjs/testing';
import { fundsStub } from './stubs/funds.stub';
import { JwtService } from '@nestjs/jwt';
import { FundsController } from '../funds.controller';
import { FundsService } from '../funds.service';
import { Funds } from '../models/funds.model';
import { fundsCreateStub } from './stubs/funds-create.stub';
import { fundsUpdateStub } from './stubs/funds-update.stub';

jest.mock('../funds.service');

describe('FundsController', () => {
  let controller: FundsController;
  let service: FundsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [FundsController],
      providers: [
        FundsService,
        {
          provide: JwtService,
          useValue: JwtService,
        },
      ],
    }).compile();

    controller = module.get<FundsController>(FundsController);
    service = module.get<FundsService>(FundsService);
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(service.create).toBeDefined();
    });

    describe('when create is called', () => {
      let fund: Funds;

      beforeEach(async () => {
        fund = (await controller.create(fundsCreateStub())).response;
      });

      it('should call fundsService', () => {
        expect(service.create).toBeCalledWith(fundsCreateStub());
      });

      it('should return a fund', () => {
        expect(fund).toEqual(fundsStub());
      });
    });
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(service.findAll).toBeDefined();
    });

    describe('when findAll is called', () => {
      let funds: Funds[];

      beforeEach(async () => {
        funds = (await controller.findAll()).response;
      });

      it('should call fundsService', () => {
        expect(service.findAll).toBeCalledWith();
      });

      it('should return a funds', () => {
        expect(funds).toEqual([fundsStub()]);
      });
    });
  });

  describe('findByPk', () => {
    it('should be defined', () => {
      expect(service.findByPk).toBeDefined();
    });

    describe('when findByPk is called', () => {
      let fund: Funds;

      beforeEach(async () => {
        fund = (await controller.findByPk(fundsStub().id)).response;
      });

      it('should call fundsService', () => {
        expect(service.findByPk).toBeCalledWith(fundsStub().id);
      });

      it('should return a fund', () => {
        expect(fund).toEqual(fundsStub());
      });
    });
  });

  describe('findByName', () => {
    it('should be defined', () => {
      expect(service.findByName).toBeDefined();
    });

    describe('when findByName is called', () => {
      let fund: Funds;

      beforeEach(async () => {
        fund = (await controller.findByName(fundsStub().name)).response;
      });

      it('should call fundsService', () => {
        expect(service.findByName).toBeCalledWith(fundsStub().name);
      });

      it('should return a fund', () => {
        expect(fund).toEqual(fundsStub());
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
        result = (await controller.update(fundsUpdateStub())).response;
      });

      it('should call fundsService', () => {
        expect(service.update).toBeCalledWith(fundsUpdateStub());
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
        result = (await controller.destroy(fundsStub().id)).response;
      });

      it('should call fundsService', () => {
        expect(service.destroy).toBeCalledWith(fundsStub().id);
      });

      it('should return a affected count', () => {
        expect(result).toEqual(1);
      });
    });
  });
});
