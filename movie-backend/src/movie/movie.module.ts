import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { MongooseModule } from '@nestjs/mongoose'; // Newly added
import { MovieSchema } from './schemas/movie.schema'; // Newly added
import { AuthenticationMiddleware } from 'src/common/authentication.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }]),
  ], // Newly added
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(
        { method: RequestMethod.POST, path: '/movie/post' },
        { method: RequestMethod.PUT, path: '/movie/edit' },
        { method: RequestMethod.DELETE, path: '/movie/delete' },
      );
  }
}
