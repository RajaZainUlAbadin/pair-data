import { Module } from '@nestjs/common';
import { PairsService } from './pairs.service';
import { PairsController } from './pairs.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pairs } from 'src/core/entiites/pairs.entity';

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([Pairs])
    ],
    controllers: [ PairsController ],
    providers: [ PairsService ]
})
export class PairsModule {}
