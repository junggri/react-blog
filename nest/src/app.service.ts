import { Injectable } from "@nestjs/common";

@Injectable()
//프로바이더로 취급될수 있다.
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
``;
