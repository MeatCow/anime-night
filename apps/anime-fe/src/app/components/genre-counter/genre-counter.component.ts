import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "anime-night-genre-counter",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./genre-counter.component.html",
})
export class GenreCounterComponent {
  @Input() count = -1;
  @Input() genre = "";
}
