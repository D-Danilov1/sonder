import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { incomeCategoriesCreateStub } from './stubs/income-categories-create.stub';
import { incomeCategoriesStub } from './stubs/income-categories.stub';
import { AppGenerator } from '../../classes/app-generator';
import { TokenGenerator } from '../../classes/token-generator';
import { AppInitializer } from '../../classes/app-initializer';
import { IncomeCategories } from '../../../src/components/financeComponent/income-categories/models/income-categories.model';

describe('IncomeCategories (e2e)', () => {
  let app: INestApplication;
  let tokenAdmin: string;
  let tokenUser: string;
  let incomeCategory: IncomeCategories;

  beforeAll(async () => {
    AppInitializer.jestSetTimeout();
    app = await AppGenerator.getApp();
    await AppInitializer.appInitialization();
    tokenAdmin = await TokenGenerator.getAdminToken();
    tokenUser = await TokenGenerator.getUserToken();
  });

  describe('/api/income-categories (POST)', () => {
    it(
      'should create a incomeCategory and return status HttpStatus.CREATED because it a Admin',
      async () => {
        await request(app.getHttpServer())
          .post('/api/income-categories')
          .set('Authorization', 'Bearer ' + tokenAdmin)
          .send(incomeCategoriesCreateStub())
          .expect(HttpStatus.CREATED)
          .then((response) => {
            incomeCategory = response.body.response;
          });
      });

    it('should return status HttpStatus.FORBIDDEN because it a User',
      async () => {
        await request(app.getHttpServer())
          .get('/api/income-categories')
          .set('Authorization', 'Bearer ' + tokenUser)
          .send(incomeCategoriesCreateStub())
          .expect(HttpStatus.FORBIDDEN);
      });

    it('should return status HttpStatus.FORBIDDEN because it a Unknown',
      async () => {
        await request(app.getHttpServer())
          .get('/api/income-categories')
          .send(incomeCategoriesCreateStub())
          .expect(HttpStatus.FORBIDDEN);
      });

    it('should return status HttpStatus.BAD_REQUEST because it empty request',
      async () => {
        await request(app.getHttpServer())
          .post('/api/income-categories')
          .set('Authorization', 'Bearer ' + tokenAdmin)
          .expect(HttpStatus.BAD_REQUEST);
      });
  });

  describe('/api/income-categories (PUT)', () => {
    it('should update a incomeCategory', async () => {
      incomeCategory.name = 'Test' + Date.now();
      await request(app.getHttpServer())
        .put('/api/income-categories')
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .send(incomeCategory)
        .then((response) => {
          expect(response.body.response).toEqual([1]);
        });
    });

    it('should return status FORBIDDEN because it a User', async () => {
      await request(app.getHttpServer())
        .put('/api/income-categories')
        .set('Authorization', 'Bearer ' + tokenUser)
        .send(incomeCategory)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status FORBIDDEN because it a Unknown', async () => {
      await request(app.getHttpServer())
        .put('/api/income-categories')
        .send(incomeCategory)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status BAD_REQUEST because it empty request',
      async () => {
        await request(app.getHttpServer())
          .put('/api/income-categories')
          .set('Authorization', 'Bearer ' + tokenAdmin)
          .expect(HttpStatus.BAD_REQUEST);
      });
  });

  describe('/api/income-categories (GET)', () => {
    it('should return income-categories and status OK because it a Admin', async () => {
      await request(app.getHttpServer())
        .get('/api/income-categories')
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .expect(HttpStatus.OK)
        .then((response) => {
          console.log(response.body.response[0]);
          expect(response.body.response[0]).toEqual(incomeCategoriesStub());
        });
    });

    it('should return status FORBIDDEN because it a User', async () => {
      await request(app.getHttpServer())
        .get('/api/income-categories')
        .set('Authorization', 'Bearer ' + tokenUser)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status FORBIDDEN because it a Unknown', async () => {
      await request(app.getHttpServer())
        .get('/api/income-categories')
        .expect(HttpStatus.FORBIDDEN);
    });
  });

  describe('/api/income-categories/:id (GET)', () => {
    it('should return a incomeCategory and status OK because it a Admin', async () => {
      await request(app.getHttpServer())
        .get('/api/income-categories/' + incomeCategory.id)
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .expect(HttpStatus.OK)
        .then((response) => {
          expect(response.body.response).toEqual(incomeCategoriesStub());
        });
    });

    it('should return status FORBIDDEN because it a User', async () => {
      await request(app.getHttpServer())
        .get('/api/income-categories/' + incomeCategory.id)
        .set('Authorization', 'Bearer ' + tokenUser)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status FORBIDDEN because it a Unknown', async () => {
      await request(app.getHttpServer())
        .get('/api/income-categories/' + incomeCategory.id)
        .expect(HttpStatus.FORBIDDEN);
    });
  });

  describe('/api/income-categories/:id (DELETE)', () => {
    it('should delete a incomeCategory', async () => {
      await request(app.getHttpServer())
        .delete('/api/income-categories/' + incomeCategory.id)
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .then((response) => {
          expect(response.body.response).toEqual(1);
        });
    });

    it('should return status FORBIDDEN because it a User', async () => {
      await request(app.getHttpServer())
        .delete('/api/income-categories/' + incomeCategory.id)
        .set('Authorization', 'Bearer ' + tokenUser)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status FORBIDDEN because it a Unknown', async () => {
      await request(app.getHttpServer())
        .delete('/api/income-categories/' + incomeCategory.id)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status NOT_FOUND because it empty request', async () => {
      await request(app.getHttpServer())
        .delete('/api/income-categories/')
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .expect(HttpStatus.NOT_FOUND);
    });
  });
});
