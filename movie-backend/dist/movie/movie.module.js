"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModule = void 0;
const common_1 = require("@nestjs/common");
const movie_controller_1 = require("./movie.controller");
const movie_service_1 = require("./movie.service");
const mongoose_1 = require("@nestjs/mongoose");
const movie_schema_1 = require("./schemas/movie.schema");
const authentication_middleware_1 = require("../common/authentication.middleware");
let MovieModule = class MovieModule {
    configure(consumer) {
        consumer
            .apply(authentication_middleware_1.AuthenticationMiddleware)
            .forRoutes({ method: common_1.RequestMethod.POST, path: '/movie/post' }, { method: common_1.RequestMethod.PUT, path: '/movie/edit' }, { method: common_1.RequestMethod.DELETE, path: '/movie/delete' });
    }
};
MovieModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Movie', schema: movie_schema_1.MovieSchema }]),
        ],
        providers: [movie_service_1.MovieService],
        controllers: [movie_controller_1.MovieController],
    })
], MovieModule);
exports.MovieModule = MovieModule;
//# sourceMappingURL=movie.module.js.map