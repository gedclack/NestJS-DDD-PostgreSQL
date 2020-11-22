import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdatePromotionDTO {

	@IsDateString()
	@IsNotEmpty()
	tgl: Date;

	@IsNumber()
	@IsNotEmpty()
	idItem: number;

	@IsNumber()
	@IsNotEmpty()
	disc: number;

}