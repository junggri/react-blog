import { Module } from "@nestjs/common";
import { ApiController } from "./api.controller";
import { ApiService } from "./api.service";

@Module({
   controllers: [ApiController],
   providers: [ApiService],
   exports: [ApiService],
})
export class ApiModule {
}
