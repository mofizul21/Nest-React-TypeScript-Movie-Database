import { NestModule, MiddlewareConsumer } from '@nestjs/common';
export declare class MovieModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void;
}
