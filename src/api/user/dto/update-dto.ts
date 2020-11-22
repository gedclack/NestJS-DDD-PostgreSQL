import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDTO {

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	firstName: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	lastName: string;

	@ApiProperty()
	@IsBoolean()
	isActive: boolean;

}