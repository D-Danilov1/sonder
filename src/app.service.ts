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
      TOKEN: this.configService.get<number>('TOKEN'),
    };
  }
  async send(dto: SendDto) {
    const token = this.configService.get<string>('TOKEN');
    const chatId = this.configService.get<string>('ChatID');
    console.log(token)
    const message = `Номер телефона: ${dto.phone}%0AПочта: ${dto.email}`;
    await axios.get(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`,
    );
    return true;
  }
}
