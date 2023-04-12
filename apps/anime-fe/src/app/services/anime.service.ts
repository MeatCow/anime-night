import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenreResponse } from '@anime-night/models';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private client: HttpClient) {}

  getGenres = (name = '') => this.client.get<GenreResponse[]>(`/api/${name}`);
}
