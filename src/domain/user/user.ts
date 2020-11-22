import { ApiProperty } from '@nestjs/swagger';

export class User {
	@ApiProperty()
	id: number;

	@ApiProperty()
	firstName: string;

	@ApiProperty()
	lastName: string;

	@ApiProperty()
	isActive: boolean;
}
