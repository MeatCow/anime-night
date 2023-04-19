import { HttpModule } from "@nestjs/axios";
import { Module, Provider } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AnilistService } from "./services/AnilistService";
import { GenreService } from "./services/GenreService";
import { RandomAnimeService } from "./services/RandomAnimeService";

const genreServiceProvider: Provider = {
  provide: GenreService,
  useClass: AnilistService ?? RandomAnimeService, // toggle this when you wanna swap between the two :)
};

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [genreServiceProvider],
})
export class AppModule {}
