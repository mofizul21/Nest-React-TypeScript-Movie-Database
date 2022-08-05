"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./movie.service");
const create_movie_dto_1 = require("./dto/create-movie.dto");
const validate_object_id_pipes_1 = require("./shared/pipes/validate-object-id.pipes");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async addMovie(res, createMovieDTO) {
        const newMovie = await this.movieService.addMovie(createMovieDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Movie has been submitted successfully!',
            movie: newMovie,
        });
    }
    async editMovie(res, movieID, createMovieDTO) {
        const editedMovie = await this.movieService.editMovie(movieID, createMovieDTO);
        if (!editedMovie) {
            throw new common_1.NotFoundException('Movie does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Movie has been successfully updated',
            movie: editedMovie,
        });
    }
    async deletePost(res, movieID) {
        const deletedMovie = await this.movieService.deleteMovie(movieID);
        if (!deletedMovie) {
            throw new common_1.NotFoundException('Movie does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Movie has been deleted!',
            movie: deletedMovie,
        });
    }
    async getMovie(res, movieID) {
        const movie = await this.movieService.getMovie(movieID);
        if (!movie) {
            throw new common_1.NotFoundException('Movie does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(movie);
    }
    async getMovies(res) {
        const movies = await this.movieService.getMovies();
        return res.status(common_1.HttpStatus.OK).json(movies);
    }
};
__decorate([
    (0, common_1.Post)('/post'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_movie_dto_1.CreateMovieDTO]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "addMovie", null);
__decorate([
    (0, common_1.Put)('/edit'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('movieID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_movie_dto_1.CreateMovieDTO]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "editMovie", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('movieID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "deletePost", null);
__decorate([
    (0, common_1.Get)('movie/:movieID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('movieID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovie", null);
__decorate([
    (0, common_1.Get)('movies'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovies", null);
MovieController = __decorate([
    (0, common_1.Controller)('movie'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
exports.MovieController = MovieController;
//# sourceMappingURL=movie.controller.js.map