import { Injectable } from '@nestjs/common';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { userInfo } from './entities/user-info.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserInfoService {
  constructor(
    @InjectModel(userInfo)
    private userInfoModel: typeof userInfo,
  ) {}
  
  async create(createUserInfoDto: CreateUserInfoDto) {
    return await this.userInfoModel.create(
      createUserInfoDto as Partial<userInfo>,
    );
  }

  async findAll() {
    return await this.userInfoModel.findAll({
      order: [['id', 'desc']],
    });
  }

  async findOne(id: number) {
    return await this.userInfoModel.findByPk(id);
  }

  async findFullname(fullname: string) {
    return await this.userInfoModel.findOne({
      where: {
        firstname: fullname,
      },
    });
  }

  async update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
    return await this.userInfoModel.update(updateUserInfoDto, {
      where: { id: id },
    });
  }

  async remove(id: number) {
    return await this.userInfoModel.destroy({
      where: { id: id },
    });
  }
}
