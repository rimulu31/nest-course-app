import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';
import { OrderService } from './order.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly utilityService: UtilityService,
    private readonly globalHelperSerivce: GlobalHelperService,
  ) {}

  @Get('/global')
  globalFunc(): string {
    return this.globalHelperSerivce.globalFunc();
  }

  @Get('/shared')
  sharedFunc(): string {
    return this.utilityService.shareFunc();
  }
}
