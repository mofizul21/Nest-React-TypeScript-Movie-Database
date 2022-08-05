"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("express-jwt");
const jwks_rsa_1 = require("jwks-rsa");
const dotenv = require("dotenv");
dotenv.config();
let AuthenticationMiddleware = class AuthenticationMiddleware {
    use(req, res, next) {
        jwt({
            secret: (0, jwks_rsa_1.expressJwtSecret)({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
            }),
            issuer: `https://${process.env.AUTH0_DOMAIN}/`,
            algorithms: ['RS256'],
        })(req, res, (err) => {
            if (err) {
                const status = err.status || 500;
                const message = err.message || 'Sorry we were unable to process your request.';
                return res.status(status).send({
                    message,
                });
            }
            next();
        });
    }
};
AuthenticationMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthenticationMiddleware);
exports.AuthenticationMiddleware = AuthenticationMiddleware;
//# sourceMappingURL=authentication.middleware.js.map