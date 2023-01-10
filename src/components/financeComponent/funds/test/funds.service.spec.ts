import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { FundsModel } from '../__mocks__/funds.model';
import { fundsStub } from './stubs/funds.stub';
import { FundsService } from '../funds.service';
import { Funds } from '../models/funds.model';
import { fundsCreateStub } from './stubs/funds-create.stub';
import { fundsUpdateStub } from './stubs/funds-update.stub';
import { mockUsersService } from '../__mocks__/users.service';
import { UsersService } from '../../../usersComponent/users/users.service';

describe('FundsService', () => {
  let service: FundsService;
  let model: typeof Funds;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FundsService,
        {
          provide: getModelToken(Funds),
          useValue: FundsModel,
        },
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    service = module.get<FundsService>(FundsService);
    model = module.get<typeof Funds>(getModelToken(Funds));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(service.create).toBeDefined();
    });

    describe('when create is called', () => {
      let fund: Funds;

      beforeEach(async () => {
        fund = await service.create(fundsCreateStub());
      });

      it('should call model create', () => {
        expect(model.create).toBeCalled();
      });

      it('should return a fund', () => {
        expect(fund).toBeDefined();
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
        funds = await service.findAll();
      });

      it('should call model findAll', () => {
        expect(model.findAll).toBeCalled();
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
        fund = await service.findByPk(fundsStub().id);
      });

      it('should call model findByPk', () => {
        expect(model.findByPk).toBeCalled();
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
        fund = await service.findByName(fundsStub().name);
      });

      it('should call model findByName', () => {
        expect(model.findOne).toBeCalled();
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
      let result: number[];

      beforeEach(async () => {
        result = await service.update(fundsUpdateStub());
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
        result = await service.destroy(fundsStub().id);
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
