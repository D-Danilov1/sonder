import { Test } from '@nestjs/testing';
import { authorizationStub } from './stubs/authorization.stub';
import { AuthorizationController } from '../authorization.controller';
import { AuthorizationService } from '../authorization.service';
import { tokenStub } from './stubs/token.stub';
import { Users } from '../../users/models/users.model';
import { usersCreateStub } from '../../users/test/stubs/users-create.stub';
import { usersStub } from '../../users/test/stubs/users.stub';
import { passthrough } from '../../../../typing/response-setting.types';
import { EntityModel } from '../../../../classes/core/entity.model';

jest.mock('../authorization.service');

describe('AuthorizationController', () => {
  let controller: AuthorizationController;
  let service: AuthorizationService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [AuthorizationController],
      providers: [AuthorizationService],
    }).compile();

    controller = module.get<AuthorizationController>(AuthorizationController);
    service = module.get<AuthorizationService>(AuthorizationService);
  });

  describe('authorization', () => {
    let cookieSpy;

    it('should be defined', () => {
      expect(service.login).toBeDefined();
    });

    describe('when authorization is called', () => {
      let tokens;

      beforeEach(async () => {
        tokens = (await controller.login(authorizationStub(), passthrough)).response;
      });

      it('should call authorizationService', () => {
        expect(service.login).toBeCalledWith(authorizationStub());
      });

      it('should return a token', () => {
        expect(tokens).toEqual(tokenStub());
      });
    });
  });

  describe('registration', () => {
    it('should be defined', () => {
      expect(service.registration).toBeDefined();
    });

    describe('when registration is called', () => {
      let users: EntityModel<Users>;

      beforeEach(async () => {
        users = (await controller.registration(usersCreateStub())).response;
      });

      it('should call authorizationService', () => {
        expect(service.registration).toBeCalledWith(usersCreateStub());
      });

      it('should return a user', () => {
        expect(users).toEqual(usersStub());
      });
    });
  });
});
