import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! -  Genesy NFT Marketplace API service!';
  }
}
