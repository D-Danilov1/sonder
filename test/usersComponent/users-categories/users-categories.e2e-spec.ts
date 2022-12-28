import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { usersCategoriesCreateStub } from './stubs/users-categories-create.stub';
import { usersCategoriesStub } from './stubs/users-categories.stub';
import { AppGenerator } from '../../classes/app-generator';
import { TokenGenerator } from '../../classes/token-generator';
import { AppInitializer } from '../../classes/app-initializer';
import { UsersCategories } from '../../../src/components/usersComponent/users-categories/models/users-categories.model';

describe('UsersCategories (e2e)', () => {
  let app: INestApplication;
  let tokenAdmin: string;
  let tokenUser: string;
  let usersCategory: UsersCategories;

  beforeAll(async () => {
    AppInitializer.jestSetTimeout();
    app = await AppGenerator.getApp();
    await AppInitializer.appInitialization();
    tokenAdmin = await TokenGenerator.getAdminToken();
    tokenUser = await TokenGenerator.getUserToken();
  });

  describe('/api/users-categories (POST)', () => {
    it(
      'should create a usersCategory and return status HttpStatus.CREATED because it a Admin',
      async () => {
        await request(app.getHttpServer())
          .post('/api/users-categories')
          .set('Authorization', 'Bearer ' + tokenAdmin)
          .send(usersCategoriesCreateStub())
          .expect(HttpStatus.CREATED)
          .then((response) => {
            usersCategory = response.body.response;
          });
      });

    it('should return status HttpStatus.FORBIDDEN because it a User',
      async () => {
        await request(app.getHttpServer())
          .get('/api/users-categories')
          .set('Authorization', 'Bearer ' + tokenUser)
          .send(usersCategoriesCreateStub())
          .expect(HttpStatus.FORBIDDEN);
      });

    it('should return status HttpStatus.FORBIDDEN because it a Unknown',
      async () => {
        await request(app.getHttpServer())
          .get('/api/users-categories')
          .send(usersCategoriesCreateStub())
          .expect(HttpStatus.FORBIDDEN);
      });

    it('should return status HttpStatus.BAD_REQUEST because it empty request',
      async () => {
        await request(app.getHttpServer())
          .post('/api/users-categories')
          .set('Authorization', 'Bearer ' + tokenAdmin)
          .expect(HttpStatus.BAD_REQUEST);
      });
  });

  describe('/api/users-categories (PUT)', () => {
    it('should update a usersCategory', async () => {
      usersCategory.name = 'Test' + Date.now();
      await request(app.getHttpServer())
        .put('/api/users-categories')
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .send(usersCategory)
        .then((response) => {
          expect(response.body.response).toEqual([1]);
        });
    });

    it('should return status FORBIDDEN because it a User', async () => {
      await request(app.getHttpServer())
        .put('/api/users-categories')
        .set('Authorization', 'Bearer ' + tokenUser)
        .send(usersCategory)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status FORBIDDEN because it a Unknown', async () => {
      await request(app.getHttpServer())
        .put('/api/users-categories')
        .send(usersCategory)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status BAD_REQUEST because it empty request',
      async () => {
        await request(app.getHttpServer())
          .put('/api/users-categories')
          .set('Authorization', 'Bearer ' + tokenAdmin)
          .expect(HttpStatus.BAD_REQUEST);
      });
  });

  describe('/api/users-categories (GET)', () => {
    it('should return users-categories and status OK because it a Admin',
      async () => {
        await request(app.getHttpServer())
          .get('/api/users-categories')
          .set('Authorization', 'Bearer ' + tokenAdmin)
          .expect(HttpStatus.OK)
          .then((response) => {
            expect(response.body.response[0]).toEqual(usersCategoriesStub());
          });
      });

    it('should return status FORBIDDEN because it a User', async () => {
      await request(app.getHttpServer())
        .get('/api/users-categories')
        .set('Authorization', 'Bearer ' + tokenUser)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status FORBIDDEN because it a Unknown', async () => {
      await request(app.getHttpServer())
        .get('/api/users-categories')
        .expect(HttpStatus.FORBIDDEN);
    });
  });

  describe('/api/users-categories/:id (GET)', () => {
    it('should return a usersCategory and status OK because it a Admin',
      async () => {
        await request(app.getHttpServer())
          .get('/api/users-categories/' + usersCategory.id)
          .set('Authorization', 'Bearer ' + tokenAdmin)
          .expect(HttpStatus.OK)
          .then((response) => {
            expect(response.body.response).toEqual(usersCategoriesStub());
          });
      });

    it('should return status FORBIDDEN because it a User', async () => {
      await request(app.getHttpServer())
        .get('/api/users-categories/' + usersCategory.id)
        .set('Authorization', 'Bearer ' + tokenUser)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status FORBIDDEN because it a Unknown', async () => {
      await request(app.getHttpServer())
        .get('/api/users-categories/' + usersCategory.id)
        .expect(HttpStatus.FORBIDDEN);
    });
  });

  describe('/api/users-categories/name/:name (GET)', () => {
    it('should return a usersCategory and status OK because it a Admin',
      async () => {
        await request(app.getHttpServer())
          .get('/api/users-categories/name/' + usersCategory.name)
          .set('Authorization', 'Bearer ' + tokenAdmin)
          .expect(HttpStatus.OK)
          .then((response) => {
            expect(response.body.response).toEqual(usersCategoriesStub());
          });
      });

    it('should return status FORBIDDEN because it a User', async () => {
      await request(app.getHttpServer())
        .get('/api/users-categories/name/' + usersCategory.name)
        .set('Authorization', 'Bearer ' + tokenUser)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status FORBIDDEN because it a Unknown', async () => {
      await request(app.getHttpServer())
        .get('/api/users-categories/name/' + usersCategory.name)
        .expect(HttpStatus.FORBIDDEN);
    });
  });

  describe('/api/users-categories/:id (DELETE)', () => {
    it('should delete a usersCategory', async () => {
      await request(app.getHttpServer())
        .delete('/api/users-categories/' + usersCategory.id)
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .then((response) => {
          expect(response.body.response).toEqual(1);
        });
    });

    it('should return status FORBIDDEN because it a User', async () => {
      await request(app.getHttpServer())
        .delete('/api/users-categories/' + usersCategory.id)
        .set('Authorization', 'Bearer ' + tokenUser)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status FORBIDDEN because it a Unknown', async () => {
      await request(app.getHttpServer())
        .delete('/api/users-categories/' + usersCategory.id)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status NOT_FOUND because it empty request', async () => {
      await request(app.getHttpServer())
        .delete('/api/users-categories/')
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .expect(HttpStatus.NOT_FOUND);
    });
  });
});
