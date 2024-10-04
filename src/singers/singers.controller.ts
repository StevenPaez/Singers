import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SingersService } from './singers.service';
import { Singer } from '@prisma/client';

@Controller('api/singers')
export class SingersController {
  constructor(private readonly singersService: SingersService) {}

  @Get()
  getSingers() {
    try {
      return this.singersService.getSingers();
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  @Get('/:id')
  getSingerById(@Param() params: any) {
    try {
      return this.singersService.getSingerById(Number(params.id));
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  @Post()
  @HttpCode(201)
  createSinger(@Body() data: Singer) {
    try {
      return this.singersService.createSinger(data);
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  @Put('/:id')
  updateSinger(@Param() params: any, @Body() data: Singer) {
    try {
      return this.singersService.updateSinger(Number(params.id), data);
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  @Delete('/:id')
  deleteSinger(@Param() params: any) {
    try {
      return this.singersService.deleteSinger(Number(params.id));
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }
}
