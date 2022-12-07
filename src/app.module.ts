import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './components/usersComponent/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { Users } from './components/usersComponent/users/models/users.model';
import { RolesModule } from './components/usersComponent/roles/roles.module';
import { Roles } from './components/usersComponent/roles/models/roles.model';
import { UsersRoles } from './components/usersComponent/many-to-many/users-roles.model';
import { AuthorizationModule } from './components/usersComponent/authorization/authorization.module';
import { UsersCategories } from './components/usersComponent/users-categories/models/users-categories.model';
import { UsersCategoriesModule } from './components/usersComponent/users-categories/users-categories.module';
import { InitializerModule } from './components/initializerComponent/initializer/initializer.module';
import { RefreshTokens } from './components/usersComponent/refresh-tokens/models/refresh-tokens.model';
import { RefreshTokensModule } from './components/usersComponent/refresh-tokens/refresh-tokens.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      models: [
        RefreshTokens,
        Roles,
        Users,
        UsersCategories,
        UsersRoles,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    AuthorizationModule,
    InitializerModule,
    RefreshTokensModule,
    RolesModule,
    UsersModule,
    UsersCategoriesModule,
  ],
})
export class AppModule {}
