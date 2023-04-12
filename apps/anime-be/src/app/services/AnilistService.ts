import { GenreResponse } from '@anime-night/models';
import { Injectable } from '@nestjs/common';
import { GenreService } from './GenreService';

@Injectable()
export class AnilistService implements GenreService {
  findByName(name: string): GenreResponse[] {
    console.log(`performing lookup for ${name} in Anilist directly`);
    return [{ count: 1, genre: 'Action' }];
  }
}
