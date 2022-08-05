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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let MovieService = class MovieService {
    constructor(movieModel) {
        this.movieModel = movieModel;
    }
    async addMovie(createMovieDTO) {
        const newMovie = await new this.movieModel(createMovieDTO);
        return newMovie.save();
    }
    async getMovie(movieID) {
        const movie = await this.movieModel.findById(movieID).exec();
        return movie;
    }
    async getMovies() {
        const movies = await this.movieModel.find().exec();
        return movies;
    }
    async editMovie(movieID, createMovieDTO) {
        const editedMovie = await this.movieModel.findByIdAndUpdate(movieID, createMovieDTO, { new: true });
        return editedMovie;
    }
    async deleteMovie(movieID) {
        const deletedMovie = await this.movieModel.findByIdAndRemove(movieID);
        return deletedMovie;
    }
};
MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Movie')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map