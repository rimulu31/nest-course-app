import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We Love NestJs';
  }
  showInfo(): string {
    return 'Hello! I am Xander, 20 years old';
}
  getJson() {
  return {
    name: 'Xander',
    lastname: 'Johnson Brian',
    age: 39,
  };
  }
}
