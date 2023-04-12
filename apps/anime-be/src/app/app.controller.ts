import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class AppController {
  @Get(':name')
  getAnimes(@Param('name') name: string) {
    return [{ genre: name, count: 2 }];
  }
}
