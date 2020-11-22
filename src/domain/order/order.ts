import { ApiProperty } from '@nestjs/swagger';

export class Order {
	@ApiProperty()
	id: number;

	@ApiProperty()
	idItem: number;

	@ApiProperty()
	qty: number;

	@ApiProperty()
	price: number;

}
