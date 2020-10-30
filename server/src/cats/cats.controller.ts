import { Controller, Get, Req, Res, HttpCode } from '@nestjs/common';
import { Request, response } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(404)
  findAll(@Req() req: Request): string {
    return '123';
  }
}
