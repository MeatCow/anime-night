import { Genre, GenreList, GenreResponse } from '@anime-night/models';
import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { GenreService } from './services/GenreService';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly genreService: GenreService) {}

  @Get(':username')
  getGenres(@Param('username') username: string): Observable<GenreResponse[]> {
    return this.genreService.allByUsername(username);
  }

  @Get(':username/:genre')
  getGenre(
    @Param('username') username: string,
    @Param('genre') genre: Genre
  ): Observable<GenreResponse> {
    if (!GenreList.some((g) => g.toLowerCase() === genre.toLowerCase()))
      throw new BadRequestException('Invalid genre');
    return this.genreService.singleByUsername(username, genre);
  }
}
