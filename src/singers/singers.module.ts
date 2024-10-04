import { Module } from '@nestjs/common';
import { SingersController } from './singers.controller';
import { SingersService } from './singers.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [SingersController],
  providers: [SingersService, PrismaService],
})
export class SingersModule {}
