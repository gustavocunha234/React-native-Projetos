import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetEntity } from './entities/pet.entity';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';

@Module({
  imports: [TypeOrmModule.forFeature([PetEntity]), ConfigModule.forRoot()],
  controllers: [PetController],
  providers: [PetService],
  exports: [PetService],
})
export class PetModule { }
