import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './components/usersComponent/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RolesModule } from './components/usersComponent/roles/roles.module';
import { AuthorizationModule } from './components/usersComponent/authorization/authorization.module';
import { InitializerModule } from './components/initializerComponent/initializer/initializer.module';
import { RefreshTokensModule } from './components/usersComponent/refresh-tokens/refresh-tokens.module';
import { FundsModule } from './components/financeComponent/funds/funds.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'mysql',
        host: configService.get('MYSQL_HOST'),
        port: +configService.get('MYSQL_PORT'),
        username: configService.get('MYSQL_USER'),
        password: configService.get('MYSQL_PASSWORD'),
        database: configService.get('MYSQL_DB'),
        autoLoadModels: true,
        synchronize: true,
        logging: false,
      }),
      inject: [ConfigService],
    }),
    AuthorizationModule,
    InitializerModule,
    RefreshTokensModule,
    RolesModule,
    UsersModule,
    FundsModule,
  ],
})
export class AppModule {}
