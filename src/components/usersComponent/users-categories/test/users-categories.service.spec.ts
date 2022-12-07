import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { UsersCategoriesService } from '../users-categories.service';
import { UsersCategories } from '../models/users-categories.model';
import { UsersCategoriesModel } from '../__mocks__/users-categories.model';
import { usersCategoriesCreateStub } from './stubs/users-categories-create.stub';
import { usersCategoriesStub } from './stubs/users-categories.stub';

describe('UsersCategoriesService', () => {
  let service: UsersCategoriesService;
  let model: typeof UsersCategories;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersCategoriesService,
        {
          provide: getModelToken(UsersCategories),
          useValue: UsersCategoriesModel,
        },
      ],
    }).compile();

    service = module.get<UsersCategoriesService>(UsersCategoriesService);
    model = module.get<typeof UsersCategories>(getModelToken(UsersCategories));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(service.create).toBeDefined();
    });

    describe('when create is called', () => {
      let usersCategory: UsersCategories;

      beforeEach(async () => {
        usersCategory = await service.create(usersCategoriesCreateStub());
      });

      it('should call model create', () => {
        expect(model.create).toBeCalled();
      });

      it('should return a users category', () => {
        expect(usersCategory).toBeDefined();
      });
    });
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(service.findAll).toBeDefined();
    });

    describe('when findAll is called', () => {
      let usersCategories: UsersCategories[];

      beforeEach(async () => {
        usersCategories = await service.findAll();
      });

      it('should call model findAll', () => {
        expect(model.findAll).toBeCalled();
      });

      it('should return a users categories', () => {
        expect(usersCategories).toEqual([usersCategoriesStub()]);
      });
    });
  });

  describe('findByPk', () => {
    it('should be defined', () => {
      expect(service.findByPk).toBeDefined();
    });

    describe('when findByPk is called', () => {
      let usersCategory: UsersCategories;

      beforeEach(async () => {
        usersCategory = await service.findByPk(usersCategoriesStub().id);
      });

      it('should call model findByPk', () => {
        expect(model.findByPk).toBeCalled();
      });

      it('should return a users category', () => {
        expect(usersCategory).toEqual(usersCategoriesStub());
      });
    });
  });

  describe('findByName', () => {
    it('should be defined', () => {
      expect(service.findByName).toBeDefined();
    });

    describe('when findByName is called', () => {
      let usersCategory: UsersCategories;

      beforeEach(async () => {
        usersCategory = await service.findByName(usersCategoriesStub().name);
      });

      it('should call model findByName', () => {
        expect(model.findOne).toBeCalled();
      });

      it('should return a users category', () => {
        expect(usersCategory).toEqual(usersCategoriesStub());
      });
    });
  });

  describe('update', () => {
    it('should be defined', () => {
      expect(service.update).toBeDefined();
    });

    describe('when update is called', () => {
      let result: number;

      beforeEach(async () => {
        result = await service.update(usersCategoriesStub());
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
        result = await service.destroy(usersCategoriesStub().id);
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
