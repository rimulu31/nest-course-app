import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { AuthGuard } from '@nestjs/passport'; 

@Controller('user-info')
@UseGuards(AuthGuard('jwt')) 
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Post('/create')
  async create(@Body() createUserInfoDto: CreateUserInfoDto) {
    const createUserInfo = await this.userInfoService.create(createUserInfoDto);
    if (createUserInfo == null) {
      throw new Error('Can not create data');
    }
    return {
      message: 'Create data complete',
      data: createUserInfo,
    };
  }

  @Get()
  findAll() {
    return this.userInfoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const finduserinfo = await this.userInfoService.findOne(+id);
    if (finduserinfo == null) {
      throw new NotFoundException('Not found data');
    }
    return finduserinfo;
  }

  @Get('/findfullname/:firstname/:lastname')
  async findFirstname(@Param('firstname') fullname: string) {
    const findfullname = await this.userInfoService.findFullname(fullname);
    if (findfullname == null) {
      throw new NotFoundException('Not found data');
    }
    return findfullname;
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateUserInfoDto: UpdateUserInfoDto,
  ) {
    const [updateUserInfo] = await this.userInfoService.update(
      +id,
      updateUserInfoDto,
    );
    console.log(updateUserInfo);
    if (updateUserInfo === 0) {
      throw new NotFoundException('Not found data to update');
    }
    return { message: 'Update data Complete' };
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    const destroyUserInfo = await this.userInfoService.remove(+id);
    console.log(destroyUserInfo);
    if (destroyUserInfo == 0) {
      throw new NotFoundException('Not found data to remove');
    }
    return { message: 'Remove Data Complete' };
  }
}
