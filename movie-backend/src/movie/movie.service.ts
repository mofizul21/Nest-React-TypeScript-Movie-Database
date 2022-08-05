import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './interfaces/movie.interface';
import { CreateMovieDTO } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel('Movie') private readonly movieModel: Model<Movie>,
  ) {}

  async addMovie(createMovieDTO: CreateMovieDTO): Promise<Movie> {
    const newMovie = await new this.movieModel(createMovieDTO);
    return newMovie.save();
  }

  async getMovie(movieID): Promise<Movie> {
    const movie = await this.movieModel.findById(movieID).exec();
    return movie;
  }

  async getMovies(): Promise<Movie[]> {
    const movies = await this.movieModel.find().exec();
    return movies;
  }

  async editMovie(movieID, createMovieDTO: CreateMovieDTO): Promise<Movie> {
    const editedMovie = await this.movieModel.findByIdAndUpdate(
      movieID,
      createMovieDTO,
      { new: true },
    );
    return editedMovie;
  }
  async deleteMovie(movieID): Promise<any> {
    const deletedMovie = await this.movieModel.findByIdAndRemove(movieID);
    return deletedMovie;
  }
}
