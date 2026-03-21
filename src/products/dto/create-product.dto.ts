import { IsString, IsNumber, IsOptional, IsObject, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @IsOptional()
  category?: string;

  @IsObject()
  @IsOptional()
  specifications?: any;

  @IsNumber()
  @IsOptional()
  @Min(0)
  totalStock?: number;
}
