import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FilenameHelper } from 'src/helpers/FilenameHelper';
import { CreatePetDto } from './dtos/createPet.dto';
import { PetEntity } from './entities/pet.entity';
import { PetService } from './pet.service';

type FileDTO = {
  fieldname: string;
  originalname: string;
  mimetype: string;
  buffer: string;
  size: number;
}

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) { }

  @Get('/all')
  async getAllPets(): Promise<PetEntity[]> {
    return this.petService.getAllPets();
  }

  @Post()
  @UseInterceptors(FileInterceptor("image", {
    storage: diskStorage({
      destination: "./upload",
      filename: FilenameHelper.customFilename
    })
  }))
  async createUser(@UploadedFile() file: FileDTO, @Body() createPet: CreatePetDto): Promise<PetEntity> {

    const petDataWithFile = {
      ...createPet, // Dados do usuário
      image: file.originalname, // Informações do arquivo
    };

    return this.petService.createPet(petDataWithFile);
  }
}
