import { Test } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { UsersCategoriesController } from '../users-categories.controller';
import { UsersCategoriesService } from '../users-categories.service';
import { UsersCategories } from '../models/users-categories.model';
import { usersCategoriesCreateStub } from './stubs/users-categories-create.stub';
import { usersCategoriesStub } from './stubs/users-categories.stub';
import { usersCategoriesUpdateStub } from './stubs/users-categories-update.stub';

jest.mock('../users-categories.service');

describe('UsersCategoriesController', () => {
  let controller: UsersCategoriesController;
  let service: UsersCategoriesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UsersCategoriesController],
      providers: [
        UsersCategoriesService,
        {
          provide: JwtService,
          useValue: JwtService,
        },
      ],
    }).compile();

    controller = module.get<UsersCategoriesController>(
      UsersCategoriesController,
    );
    service = module.get<UsersCategoriesService>(UsersCategoriesService);
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(service.create).toBeDefined();
    });

    describe('when create is called', () => {
      let usersCategory: UsersCategories;

      beforeEach(async () => {
        usersCategory = (await controller.create(usersCategoriesCreateStub()))
          .response;
      });

      it('should call usersCategoriesService', () => {
        expect(service.create).toBeCalledWith(usersCategoriesCreateStub());
      });

      it('should return a users category', () => {
        expect(usersCategory).toEqual(usersCategoriesStub());
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
        usersCategories = (await controller.findAll()).response;
      });

      it('should call usersCategoriesService', () => {
        expect(service.findAll).toBeCalledWith();
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
        usersCategory = (await controller.findByPk(usersCategoriesStub().id))
          .response;
      });

      it('should call usersCategoriesService', () => {
        expect(service.findByPk).toBeCalledWith(usersCategoriesStub().id);
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
        usersCategory = (
          await controller.findByName(usersCategoriesStub().name)
        ).response;
      });

      it('should call usersCategoriesService', () => {
        expect(service.findByName).toBeCalledWith(usersCategoriesStub().name);
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
      let result;

      beforeEach(async () => {
        result = (await controller.update(usersCategoriesUpdateStub()))
          .response;
      });

      it('should call usersCategoriesService', () => {
        expect(service.update).toBeCalledWith(usersCategoriesUpdateStub());
      });

      it('should return a affected count', () => {
        expect(result).toEqual({ affectedCount: 1 });
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
        result = (await controller.destroy(usersCategoriesStub().id)).response;
      });

      it('should call usersCategoriesService', () => {
        expect(service.destroy).toBeCalledWith(usersCategoriesStub().id);
      });

      it('should return a affected count', () => {
        expect(result).toEqual(1);
      });
    });
  });
});
