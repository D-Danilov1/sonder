import * as TelegramBot from 'node-telegram-bot-api';

export class Telegram {
  private readonly bot: TelegramBot;
  private clientUrl: string = process.env.CLIENT_URL;

  constructor() {
    this.bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
  }

  getBot(): TelegramBot {
    return this.bot
  }

  async messageResponse(msg: TelegramBot.messages) {
    const chatId = msg.chat.id;

    if (msg.text === '/start') {
      await this.bot.sendMessage(chatId,
        '*Давайте начнем*\n\nПожалуйста, нажмите на кнопку ниже, чтобы заказать разработку',
        {
          parse_mode: 'Markdown',
          reply_markup: {
            inline_keyboard: [
              [{ text: 'Сделать заказ', web_app: { url: this.clientUrl } }],
            ],
          },
        });
    }
  }
}