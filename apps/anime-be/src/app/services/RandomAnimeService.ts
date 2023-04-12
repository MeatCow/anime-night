import { GenreResponse } from '@anime-night/models';
import { Injectable } from '@nestjs/common';
import { GenreService } from './GenreService';

@Injectable()
export class RandomAnimeService implements GenreService {
  findByName(name: string): GenreResponse[] {
    console.log(`performing lookup for ${name} in Random Anime`);
    return [{ count: 15, genre: 'Adventure' }];
  }
}
