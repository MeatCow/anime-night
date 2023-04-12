import { GenreList, GenreResponse } from '@anime-night/models';
import { createListRequest } from '@anime-night/helpers';
import { Injectable } from '@nestjs/common';
import { GenreService } from './GenreService';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class RandomAnimeService implements GenreService {
  constructor(private readonly http: HttpService) {}

  findByName(name: string): GenreResponse[] {
    return GenreList.map((genre) => ({
      genre: genre,
      count: Math.floor(Math.random() * 15) + 1,
    }));
  }
}
