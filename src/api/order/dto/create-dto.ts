import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDTO {

	@ApiProperty()
	@IsNumber()
	@IsNotEmpty()
	idItem: number;

	@ApiProperty()
	@IsNumber()
	@IsNotEmpty()
	qty: number;

	@ApiProperty()
	@IsNumber()
	@IsNotEmpty()
	prc: number;

}