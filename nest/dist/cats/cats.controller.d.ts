import { CatsService } from "./cats.service";
import { CreateCatDto } from "./create-cats.dto";
import { Cat } from "./interface/cat.interface";
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<void>;
    findAll(): Promise<Cat[]>;
}
