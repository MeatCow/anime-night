import { GenreResponse } from '@anime-night/models';
import { Controller, Get, Param } from '@nestjs/common';
import { GenreService } from './services/GenreService';

@Controller()
export class AppController {
  constructor(private readonly genreService: GenreService) {}

  @Get(':name')
  getAnimes(@Param('name') name: string): GenreResponse[] {
    return this.genreService.findByName(name);
  }
}
