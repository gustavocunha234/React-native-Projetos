import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from "express";
import { diskStorage } from 'multer';
import { join } from 'path';
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
  filename: string,
  path: string,
}

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService, private configService: ConfigService) { }

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

    const appUrl = (this.configService.get<string>('APP_URL'))

    if (file) {
      createPet.image = `${appUrl}/pet/upload/${file.filename}`;
    } else {
      createPet.image = null;
    }

    return this.petService.createPet(createPet);
  }

  @Get('upload/:file')
  serveImage(@Param('file') file: string, @Res() res: Response) {
    const appUrl = this.configService.get<string>('APP_URL');
    const uploadPath = join(__dirname, '..', '..', 'upload', file); // Caminho completo do arquivo

    // Use res.sendFile para servir o arquivo
    res.sendFile(uploadPath);
  }
}
