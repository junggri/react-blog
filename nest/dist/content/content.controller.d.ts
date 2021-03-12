import { ContentService } from "./content.service";
export declare class ContentController {
    private contentSevice;
    constructor(contentSevice: ContentService);
    find(): Promise<any>;
}
