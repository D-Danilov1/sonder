import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { IncomeModel } from '../__mocks__/income.model';
import { incomeStub } from './stubs/income.stub';
import { IncomeService } from '../income.service';
import { Income } from '../models/income.model';
import { incomeCreateStub } from './stubs/income-create.stub';
import { incomeUpdateStub } from './stubs/income-update.stub';
import { mockUsersService } from '../__mocks__/users.service';
import { UsersService } from '../../../usersComponent/users/users.service';

describe('IncomeService', () => {
  let service: IncomeService;
  let model: typeof Income;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        IncomeService,
        {
          provide: getModelToken(Income),
          useValue: IncomeModel,
        },
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    service = module.get<IncomeService>(IncomeService);
    model = module.get<typeof Income>(getModelToken(Income));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(service.create).toBeDefined();
    });

    describe('when create is called', () => {
      let income: Income;

      beforeEach(async () => {
        income = await service.create(incomeCreateStub());
      });

      it('should call model create', () => {
        expect(model.create).toBeCalled();
      });

      it('should return a income', () => {
        expect(income).toBeDefined();
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
        income = await service.findAll();
      });

      it('should call model findAll', () => {
        expect(model.findAll).toBeCalled();
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
      let income: Income;

      beforeEach(async () => {
        income = await service.findByPk(incomeStub().id);
      });

      it('should call model findByPk', () => {
        expect(model.findByPk).toBeCalled();
      });

      it('should return a income', () => {
        expect(income).toEqual(incomeStub());
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
        result = await service.update(incomeUpdateStub());
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
        result = await service.destroy(incomeStub().id);
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
