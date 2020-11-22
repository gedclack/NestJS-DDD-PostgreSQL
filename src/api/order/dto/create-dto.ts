import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDTO {

	@IsNumber()
	@IsNotEmpty()
	idItem: number;

	@IsNumber()
	@IsNotEmpty()
	qty: number;

	@IsNumber()
	@IsNotEmpty()
	prc: number;

}