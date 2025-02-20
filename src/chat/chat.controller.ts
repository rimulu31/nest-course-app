import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';
import { ChatService } from './chat.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
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
