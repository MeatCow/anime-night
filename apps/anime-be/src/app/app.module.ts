import { Module, Provider } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { AppController } from './app.controller';
import { GenreService } from './services/GenreService';
import { AnilistService } from './services/AnilistService';
import { RandomAnimeService } from './services/RandomAnimeService';

const genreServiceProvider: Provider = {
  provide: GenreService,
  useClass: RandomAnimeService ?? AnilistService, // toggle this when you wanna swap between the two :)
};

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [genreServiceProvider],
})
export class AppModule {}
