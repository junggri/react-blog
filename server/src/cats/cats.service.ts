import { Injectable } from '@nestjs/common';
import { Cat } from './cats.interface';

@Injectable()
//@=데코레이터는 메타데이터를 붙여주고 nest가 프로바이더라는것을 알아차린다.
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;   
  }
}
