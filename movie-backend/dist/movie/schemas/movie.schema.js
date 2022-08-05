"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieSchema = void 0;
const mongoose = require("mongoose");
exports.MovieSchema = new mongoose.Schema({
    title: String,
    poster: String,
    description: String,
    author: String,
    date_posted: String,
});
//# sourceMappingURL=movie.schema.js.map