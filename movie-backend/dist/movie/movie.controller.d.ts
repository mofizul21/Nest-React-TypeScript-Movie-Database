import { MovieService } from './movie.service';
import { CreateMovieDTO } from './dto/create-movie.dto';
export declare class MovieController {
    private movieService;
    constructor(movieService: MovieService);
    addMovie(res: any, createMovieDTO: CreateMovieDTO): Promise<any>;
    editMovie(res: any, movieID: any, createMovieDTO: CreateMovieDTO): Promise<any>;
    deletePost(res: any, movieID: any): Promise<any>;
    getMovie(res: any, movieID: any): Promise<any>;
    getMovies(res: any): Promise<any>;
}
