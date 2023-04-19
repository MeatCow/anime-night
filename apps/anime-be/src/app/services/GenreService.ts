import { Genre, GenreResponse } from '@anime-night/models';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export abstract class GenreService {
  abstract allByUsername(username: string): Observable<GenreResponse[]>;
  abstract singleByUsername(
    username: string,
    genre: Genre
  ): Observable<GenreResponse>;
}
