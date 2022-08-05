import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; // add this
import { MovieModule } from './movie/movie.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nestreactsignup:nestreactsignup017@cluster0.cqgnp.mongodb.net/movie?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      },
    ),
    MovieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
