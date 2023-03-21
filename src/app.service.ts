import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { SendDto } from './parse.dto';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getDbConfig(): any {
    return {
      ChatID: this.configService.get<string>('ChatID'),
      TOKEN: this.configService.get<string>('TOKEN'),
    };
  }
  async send(dto: SendDto) {
    const token = this.configService.get<string>('TOKEN');
    const chatId = this.configService.get<string>('ChatID');

    const message = `Номер телефона: ${dto.phone}%0AПочта: ${dto.email}${dto.message}`;

    const response = await axios.get(
      `https://api.telegram.org/bot6256679369:AAHONrIBT4l1c2oJ-wvKAJ-NaTdlo2ctfzw/sendMessage?chat_id=-887391970&text=${message}`,
    );
    return response.status;
  }
}
