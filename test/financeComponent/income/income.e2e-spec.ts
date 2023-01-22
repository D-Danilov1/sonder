import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { incomeCreateStub } from './stubs/income-create.stub';
import { incomeStub } from './stubs/income.stub';
import { AppGenerator } from '../../classes/app-generator';
import { TokenGenerator } from '../../classes/token-generator';
import { AppInitializer } from '../../classes/app-initializer';
import { Income } from '../../../src/components/financeComponent/income/models/income.model';
import { IncomeCategories } from '../../../src/components/financeComponent/income-categories/models/income-categories.model';
import { incomeCategoriesCreateStub } from '../income-categories/stubs/income-categories-create.stub';

describe('Income (e2e)', () => {
  let app: INestApplication;
  let tokenAdmin: string;
  let tokenUser: string;
  let income: Income;
  let incomeCategory: IncomeCategories;

  beforeAll(async () => {
    AppInitializer.jestSetTimeout();
    app = await AppGenerator.getApp();
    await AppInitializer.appInitialization();
    tokenAdmin = await TokenGenerator.getAdminToken();
    tokenUser = await TokenGenerator.getUserToken();
  });

  describe('Create entities before test', () => {
    it('should create a incomeCategory and return status HttpStatus.CREATED because it a Admin', async () => {
      await request(app.getHttpServer())
        .post('/api/income-categories')
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .send(incomeCategoriesCreateStub())
        .expect(HttpStatus.CREATED)
        .then((response) => {
          incomeCategory = response.body.response;
        });
    });
  });

  describe('/api/income (POST)', () => {
    it('should create a income and return status HttpStatus.CREATED because it a Admin', async () => {
      let _incomeCreateStub = incomeCreateStub();
      _incomeCreateStub.income_category_id = incomeCategory.id;
      await request(app.getHttpServer())
        .post('/api/income')
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .send(_incomeCreateStub)
        .expect(HttpStatus.CREATED)
        .then((response) => {
          income = response.body.response;
        });
    });

    it('should return status HttpStatus.FORBIDDEN because it a User', async () => {
      await request(app.getHttpServer())
        .get('/api/income')
        .set('Authorization', 'Bearer ' + tokenUser)
        .send(incomeCreateStub())
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status HttpStatus.FORBIDDEN because it a Unknown', async () => {
      await request(app.getHttpServer())
        .get('/api/income')
        .send(incomeCreateStub())
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status HttpStatus.BAD_REQUEST because it empty request', async () => {
      await request(app.getHttpServer())
        .post('/api/income')
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .expect(HttpStatus.BAD_REQUEST);
    });
  });

  describe('/api/income (PUT)', () => {
    it('should update a income', async () => {
      income.comment = 'Test' + Date.now();
      await request(app.getHttpServer())
        .put('/api/income')
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .send(income)
        .then((response) => {
          expect(response.body.response).toEqual([1]);
        });
    });

    it('should return status FORBIDDEN because it a User', async () => {
      await request(app.getHttpServer())
        .put('/api/income')
        .set('Authorization', 'Bearer ' + tokenUser)
        .send(income)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status FORBIDDEN because it a Unknown', async () => {
      await request(app.getHttpServer())
        .put('/api/income')
        .send(income)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status BAD_REQUEST because it empty request', async () => {
      await request(app.getHttpServer())
        .put('/api/income')
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .expect(HttpStatus.BAD_REQUEST);
    });
  });

  describe('/api/income (GET)', () => {
    it('should return income and status OK because it a Admin', async () => {
      await request(app.getHttpServer())
        .get('/api/income')
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .expect(HttpStatus.OK)
        .then((response) => {
          console.log(response.body.response[0]);
          expect(response.body.response[0]).toEqual(incomeStub());
        });
    });

    it('should return status FORBIDDEN because it a User', async () => {
      await request(app.getHttpServer())
        .get('/api/income')
        .set('Authorization', 'Bearer ' + tokenUser)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status FORBIDDEN because it a Unknown', async () => {
      await request(app.getHttpServer())
        .get('/api/income')
        .expect(HttpStatus.FORBIDDEN);
    });
  });

  describe('/api/income/:id (GET)', () => {
    it('should return a income and status OK because it a Admin', async () => {
      await request(app.getHttpServer())
        .get('/api/income/' + income.id)
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .expect(HttpStatus.OK)
        .then((response) => {
          expect(response.body.response).toEqual(incomeStub());
        });
    });

    it('should return status FORBIDDEN because it a User', async () => {
      await request(app.getHttpServer())
        .get('/api/income/' + income.id)
        .set('Authorization', 'Bearer ' + tokenUser)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status FORBIDDEN because it a Unknown', async () => {
      await request(app.getHttpServer())
        .get('/api/income/' + income.id)
        .expect(HttpStatus.FORBIDDEN);
    });
  });

  describe('/api/income/:id (DELETE)', () => {
    it('should delete a income', async () => {
      await request(app.getHttpServer())
        .delete('/api/income/' + income.id)
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .then((response) => {
          expect(response.body.response).toEqual(1);
        });
    });

    it('should return status FORBIDDEN because it a User', async () => {
      await request(app.getHttpServer())
        .delete('/api/income/' + income.id)
        .set('Authorization', 'Bearer ' + tokenUser)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status FORBIDDEN because it a Unknown', async () => {
      await request(app.getHttpServer())
        .delete('/api/income/' + income.id)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('should return status NOT_FOUND because it empty request', async () => {
      await request(app.getHttpServer())
        .delete('/api/income/')
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .expect(HttpStatus.NOT_FOUND);
    });
  });

  describe('Delete entities after test', () => {
    it('should delete a incomeCategory', async () => {
      await request(app.getHttpServer())
        .delete('/api/income-categories/' + incomeCategory.id)
        .set('Authorization', 'Bearer ' + tokenAdmin)
        .then((response) => {
          expect(response.body.response).toEqual(1);
        });
    });
  });
});
