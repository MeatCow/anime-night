import { Genre, GenreResponse } from '@anime-night/models';
import { Injectable } from '@nestjs/common';
import { GenreService } from './GenreService';
import { Observable, of } from 'rxjs';

//TODO: Learn how to use Anilist's mess of an API
@Injectable()
export class AnilistService implements GenreService {
  allByUsername(username: string): Observable<GenreResponse[]> {
    return of([{ genre: 'Action', count: 5 }]);
  }
  singleByUsername(username: string, genre: Genre): Observable<GenreResponse> {
    return of({ genre: genre, count: 5 });
  }
}
