import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePromotionDTO {

	@ApiProperty()
	@IsDateString()
	@IsNotEmpty()
	tgl: Date;

	@ApiProperty()
	@IsNumber()
	@IsNotEmpty()
	idItem: number;

	@ApiProperty()
	@IsNumber()
	@IsNotEmpty()
	disc: number;

}