import { CatsService } from "./cats.service";
interface Connection {
    test: string;
}
export declare class CatsController {
    private service;
    constructor(service: CatsService, connection: Connection);
    find(): void;
}
export {};
