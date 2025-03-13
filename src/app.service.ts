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
      age: 21,
      version: process.env.API_VERSION,
    };
  }
  getJson2() {
    return {
      name: 'Xander',
      lastname: 'Johnson Brian',
      age: 21,
    };
  }
  getXander() {
    return {
      name: 'Xander',
      species: 'hedgehog',
      age: '21',
      country: 'Australia',
      version: process.env.API_VERSION,
    };
  }
}
