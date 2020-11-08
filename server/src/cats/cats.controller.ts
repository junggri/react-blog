import { Controller, HttpCode, Post, Body, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cats.interface';
import { CreateDto } from './dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createDto: CreateDto) {
    this.catsService.create(createDto);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.catsService.findAll();
  }
}
console.log(CatsService);
