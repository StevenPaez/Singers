import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Singer } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SingersService {
  constructor(private PrismaService: PrismaService) {}

  async getSingers() {
    const singers = await this.PrismaService.singer.findMany();
    return singers;
  }

  async getSingerById(id: number) {
    const singer = await this.PrismaService.singer.findUnique({
      where: { id },
    });
    if (!singer) {
      throw new NotFoundException('Singer not found');
    }

    return singer;
  }

  async createSinger(data: Singer) {
    return this.PrismaService.singer.create({
      data,
    });
  }

  async updateSinger(id: number, data: Singer) {
    const singer = await this.PrismaService.singer.update({
      where: { id },
      data,
    });
    if (!singer) {
      throw new HttpException('Singer not found', 404);
    }

    return singer;
  }

  async deleteSinger(id: number) {
    const singer = await this.PrismaService.singer.delete({
      where: { id },
    });

    if (!singer) {
      throw new NotFoundException('Singer not found');
    }

    return singer;
  }
}
