import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/showinformation')
  showInfo(): string {
    return this.appService.showInfo();
  }
  @Get('/showJson')
  getJson() {
    return this.appService.getJson();
  }
  @Get('/showJson2')
  getJson2() {
    return this.appService.getJson2();
}