import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GenreCounterComponent } from "../components/genre-counter/genre-counter.component";
import { AnimeService } from "../services/anime.service";

@Component({
  selector: "anime-night-index",
  standalone: true,
  templateUrl: "./index.component.html",
  imports: [CommonModule, GenreCounterComponent],
})
export default class IndexComponent {
  animes$ = this.animeService.getGenres("yaxkin");

  constructor(private animeService: AnimeService) {}
}
