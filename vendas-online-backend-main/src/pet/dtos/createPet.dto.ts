import { IsString } from 'class-validator';

export class CreatePetDto {
  @IsString()
  species: string;

  @IsString()
  gender: string;

  @IsString()
  race: string;

  @IsString()
  address: string;

  @IsString()
  name: string;

  @IsString()
  image: string;

  @IsString()
  reason: string;
}
