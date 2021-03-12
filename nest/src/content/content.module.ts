import { Module } from "@nestjs/common";
import { ContentController } from "./content.controller";
import { ContentService } from "./content.service";

@Module({
   // imports: [TypeOrmModule.forFeature([Content])],
   controllers: [ContentController],
   providers: [ContentService],
   exports: [ContentService],
})
export class ContentModule {
}
