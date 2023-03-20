import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendDto } from './parse.dto';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @Post('/api/send')
  async sendTg(
    @Body() dto: SendDto,
  ): Promise<{ response: any; statusCode: HttpStatus.OK }> {
    return {
      statusCode: HttpStatus.OK,
      response: await this.service.send(dto),
    };
  }
}
