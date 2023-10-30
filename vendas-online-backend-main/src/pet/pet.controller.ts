import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePetDto } from './dtos/createPet.dto';
import { PetEntity } from './entities/pet.entity';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) { }

  @Get('/all')
  async getAllPets(): Promise<PetEntity[]> {
    return this.petService.getAllPets();
  }

  @Post()
  async createUser(@Body() createPet: CreatePetDto): Promise<PetEntity> {
    return this.petService.createPet(createPet);
  }
}
