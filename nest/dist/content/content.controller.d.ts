import { ContentService } from "./content.service";
import { ConfigService } from "@nestjs/config";
import { CommentService } from "../comment/comment.service";
export declare class ContentController {
    private readonly contentService;
    private readonly commentService;
    private readonly config;
    constructor(contentService: ContentService, commentService: CommentService, config: ConfigService);
    find(): any;
}
