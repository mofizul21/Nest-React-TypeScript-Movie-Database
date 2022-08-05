import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
  Put,
  Query,
  Delete,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  // Submit a movie
  @Post('/post')
  async addMovie(@Res() res, @Body() createMovieDTO: CreateMovieDTO) {
    const newMovie = await this.movieService.addMovie(createMovieDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Movie has been submitted successfully!',
      movie: newMovie,
    });
  }

  // Edit a particular movie using ID
  @Put('/edit')
  async editMovie(
    @Res() res,
    @Query('movieID', new ValidateObjectId()) movieID,
    @Body() createMovieDTO: CreateMovieDTO,
  ) {
    const editedMovie = await this.movieService.editMovie(
      movieID,
      createMovieDTO,
    );
    if (!editedMovie) {
      throw new NotFoundException('Movie does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Movie has been successfully updated',
      movie: editedMovie,
    });
  }

  // Delete a movie using ID
  @Delete('/delete')
  async deletePost(
    @Res() res,
    @Query('movieID', new ValidateObjectId()) movieID,
  ) {
    const deletedMovie = await this.movieService.deleteMovie(movieID);
    if (!deletedMovie) {
      throw new NotFoundException('Movie does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Movie has been deleted!',
      movie: deletedMovie,
    });
  }

  // Fetch a particular movie using ID
  @Get('movie/:movieID')
  async getMovie(
    @Res() res,
    @Param('movieID', new ValidateObjectId()) movieID,
  ) {
    const movie = await this.movieService.getMovie(movieID);
    if (!movie) {
      throw new NotFoundException('Movie does not exist!');
    }
    return res.status(HttpStatus.OK).json(movie);
  }

  // Fetch all movies
  @Get('movies')
  async getMovies(@Res() res) {
    const movies = await this.movieService.getMovies();
    return res.status(HttpStatus.OK).json(movies);
  }
}
