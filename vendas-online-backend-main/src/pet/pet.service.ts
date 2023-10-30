import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dtos/createPet.dto';
import { PetEntity } from './entities/pet.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(PetEntity)
    private readonly petRepository: Repository<PetEntity>,


  ) { }

  async createPet(
    createPetDto: CreatePetDto,
  ): Promise<PetEntity> {

    return this.petRepository.save({
      ...createPetDto,
    });
  }

  async getAllPets(): Promise<PetEntity[]> {
    const pets = await this.petRepository.find();

    return pets;
  }

  async findPetById(petId: number): Promise<PetEntity> {
    const pet = await this.petRepository.findOne({
      where: {
        id: petId,
      },
    });

    if (!pet) {
      throw new NotFoundException(`CPetId: ${petId} not found.`);
    }

    return pet;
  }

  async findPetByGender(
    petGender: string,
  ): Promise<PetEntity> {
    const pet = await this.petRepository.findOne({
      where: {
        gender: petGender,
      }
    });

    if (!pet) {
      throw new NotFoundException(`Pet not found.`);
    }

    return pet;
  }
}
