import { createListRequest } from "@anime-night/helpers";
import { GenreList, GenreResponse, ListResponse } from "@anime-night/models";
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Observable, forkJoin, map, retry } from "rxjs";
import { GenreService } from "./GenreService";

@Injectable()
export class RandomAnimeService implements GenreService {
  constructor(private readonly http: HttpService) {}

  allByUsername(username: string): Observable<GenreResponse[]> {
    const requests = GenreList.map((genre) => this.singleByUsername(username, genre));
    return forkJoin(requests);
  }

  singleByUsername = (username: string, genre: string): Observable<GenreResponse> => {
    return this.getList(username, genre).pipe(map((count) => ({ genre, count })));
  };

  private getList = (username: string, genre: string): Observable<number> => {
    return this.http
      .get<ListResponse>("https://www.randomanime.org/api/list/custom", createListRequest(genre, username))
      .pipe(
        retry({ count: 3, delay: 1500 }),
        map((res) => res.data.resultsTotal)
      );
  };
}
