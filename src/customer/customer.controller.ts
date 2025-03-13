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
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Not } from 'sequelize-typescript';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const findcustomer = await this.customerService.findOne(+id);
    if (findcustomer == null) {
      throw new NotFoundException('Not Found Data!!!');
    }
    return findcustomer;
  }

  @Get('/findfullname/:fullname')
  async findFullname(@Param('fullname') fullname: string) {
    const findfullname = await this.customerService.findFullname(fullname);
    if (findfullname == null) {
      throw new NotFoundException('Not Found Data');
    }
    return findfullname;
  }

  @Post('/create')
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    const createCustomer = await this.customerService.create(createCustomerDto);
    if (createCustomer == null) {
      throw new Error('Can not create data');
    }
    return {
      message: 'Create data complete',
      data: createCustomer,
    };
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    const [updateCustomer] = await this.customerService.update(
      +id,
      updateCustomerDto,
    );
    console.log(updateCustomer);
    if (updateCustomer === 0) {
      throw new NotFoundException('Not Found Data to Update');
    }
    return { message: 'Update data complete' };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    const destroyCustomer = await this.customerService.remove(+id);
    console.log(destroyCustomer);
    if (destroyCustomer == 0) {
      throw new NotFoundException('Not Found Data to remove');
    }
    return { message: 'Remove data complte' };
  }
}
