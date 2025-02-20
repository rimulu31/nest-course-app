import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';
import { UserService } from './user.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
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
