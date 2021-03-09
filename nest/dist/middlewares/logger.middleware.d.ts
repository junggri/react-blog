import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
export declare class logger implements NestMiddleware {
    private logger;
    use(req: Request, res: Response, next: NextFunction): void;
}
