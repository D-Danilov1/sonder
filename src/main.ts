import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { TelegramApi } from './classes/services/telegram.api';
import * as TelegramBot from 'node-telegram-bot-api';

const telegram = new TelegramApi();
telegram.getBot()
  .on('message', (msg: TelegramBot.messages) => telegram.messageResponse(msg));

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.enableCors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE',
    credentials: true,
  });

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

bootstrap();
