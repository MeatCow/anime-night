import { GenreResponse } from '@anime-night/models';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class GenreService {
  abstract findByName(name: string): GenreResponse[];
}
