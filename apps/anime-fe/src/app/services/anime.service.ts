import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private client: HttpClient) {}

  getGenres = (name = '') => this.client.get<any[]>(`/api/${name}`);
}
