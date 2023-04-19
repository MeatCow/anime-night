import { GenreResponse } from "@anime-night/models";
import { BadRequestException, Injectable } from "@nestjs/common";
import anilist, { AnimeUserGenres } from "anilist-node";
import { Observable, defer, forkJoin, map, of } from "rxjs";
import { GenreService } from "./GenreService";
import settings = require("./settings.json");

//TODO: Learn how to use Anilist's mess of an API
@Injectable()
export class AnilistService implements GenreService {
  lookup = new anilist(settings.token);

  allByUsername(username: string): Observable<GenreResponse[]> {
    return of([{ genre: "Action", count: 5 }]);
  }

  singleByUsername(username: string, genre: string): Observable<any> {
    const watchedCount$ = this.getGenreCount(username).pipe(map((counts) => this.byGenre(counts, genre)));
    const totalCount$ = this.getTotalCount(genre);

    return forkJoin([watchedCount$, totalCount$]).pipe(map(([watched, total]) => ({ genre, watched, total })));
  }

  private byGenre = (counts: AnimeUserGenres[], genre: string): number => {
    const found = counts.find((g) => g.genre.toLowerCase() === genre.toLowerCase());

    if (!found) throw new BadRequestException("Could not find genre in AniList");

    return found.count;
  };

  private getGenreCount = (username: string) =>
    defer(() => this.lookup.user.stats(username)).pipe(
      map((user) => {
        const genres = user.anime.genres;

        if (genres.length === 0) throw new BadRequestException("Could not find genre in AniList");

        return genres;
      })
    );

  private getTotalCount = (genre: string) =>
    defer(() => this.lookup.searchEntry.anime(undefined, { genre })).pipe(map((search) => search.pageInfo));
}
