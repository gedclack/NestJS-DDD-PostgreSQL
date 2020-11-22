import { ApiProperty } from '@nestjs/swagger';

export class Promotion {
	@ApiProperty()
	id: number;
	
	@ApiProperty()
	tgl: Date;
	
	@ApiProperty()
	idItem: number;
	
	@ApiProperty()
	disc: number;
	
}
