import { INestApplication } from '@nestjs/common';
import { AppGenerator } from './classes/app-generator';
import { AppInitializer } from './classes/app-initializer';
import { TokenGenerator } from './classes/token-generator';

describe('Specializations (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await AppGenerator.getApp();
    await AppInitializer.appInitialization();
    console.log(TokenGenerator.getSyntheticToken());
  });

  describe('/api/specializations (POST)', () => {
    it('should initialized app', async () => {
      expect(1).toEqual(1);
    });
  });
});