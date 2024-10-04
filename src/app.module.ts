import { Module } from '@nestjs/common';
import { SingersModule } from './singers/singers.module';

@Module({
  imports: [SingersModule],
})
export class AppModule {}
