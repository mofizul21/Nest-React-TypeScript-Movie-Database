import { Model } from 'mongoose';
import { Movie } from './interfaces/movie.interface';
import { CreateMovieDTO } from './dto/create-movie.dto';
export declare class MovieService {
    private readonly movieModel;
    constructor(movieModel: Model<Movie>);
    addMovie(createMovieDTO: CreateMovieDTO): Promise<Movie>;
    getMovie(movieID: any): Promise<Movie>;
    getMovies(): Promise<Movie[]>;
    editMovie(movieID: any, createMovieDTO: CreateMovieDTO): Promise<Movie>;
    deleteMovie(movieID: any): Promise<any>;
}
