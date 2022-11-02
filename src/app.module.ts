import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { ActorModule } from 'src/api/actor/actor.module';
import { Actor } from 'src/api/actor/entities/actor.entity';
import { FilmModule } from 'src/api/film/film.module';
import { Film } from 'src/api/film/entities/film.entity';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sakira',
      entities: [Actor, Film],
      synchronize: false,
    }),
    ActorModule,
    FilmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
