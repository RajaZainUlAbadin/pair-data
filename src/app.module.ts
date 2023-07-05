import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PairsModule } from './module/pairs/pairs.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "pairsDB",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    ScheduleModule.forRoot(),
    PairsModule,
  ],
  controllers: [ AppController ],
  providers: [ AppService],
})
export class AppModule {}
