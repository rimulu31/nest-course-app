import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productFunc(): string {
    return 'Hello from product service';
  }
  productFunc2(): string {
    return 'Hello form product service2';
  }
  productJSON() {
    return {
      name: 'Xanderson Brianson Johnson HummingBird',
      age: '27',
      hobby: 'talking to tifa',
    };
  }
}
