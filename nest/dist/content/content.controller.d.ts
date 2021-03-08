import { ContentService } from "./content.service";
import { CommentService } from "../comment/comment.service";
import { ConfigService } from "@nestjs/config";
export declare class ContentController {
    private readonly contentService;
    private readonly commentService;
    private readonly configS;
    constructor(contentService: ContentService, commentService: CommentService, configS: ConfigService);
    find(): any;
    get(): any;
}
