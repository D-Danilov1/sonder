import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { Telegram } from './classes/telegram';
import * as TelegramBot from 'node-telegram-bot-api';

const telegram = new Telegram();
telegram.getBot().on('message', (msg: TelegramBot.messages) => telegram.messageResponse(msg));

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder().setTitle('Finance').
    setDescription('Документация REST API').
    setVersion('1.0.0').
    build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/docs', app, document);

  app.use(cookieParser());
  app.enableCors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE',
    credentials: true,
  });

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

bootstrap();
