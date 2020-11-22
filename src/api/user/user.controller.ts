import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from "@nestjs/swagger";
import { DeleteUser } from 'src/domain/user/actions/delete';
import { Insert } from 'src/domain/user/actions/insert';
import { Select } from 'src/domain/user/actions/select';
import { Update } from 'src/domain/user/actions/update';
import { User } from 'src/domain/user/user';
import { CreateUserDTO } from './dto/create-dto';
import { UpdateUserDTO } from './dto/update-dto';

@ApiTags('user')
@Controller('user')
export class UserController {

	constructor(
		private userSelect: Select,
		private userInsert: Insert,
		private userUpdate: Update,
		private userDelete: DeleteUser
	){}

	@Get()
	@ApiOkResponse({ type: [User] })
	getUsers(): Promise<User[]> {
		return this.userSelect.GetAll();
	}

	@Get(':id')
	@ApiOkResponse({ type: User })
	getUser(@Param('id') id: string): Promise<User> {
		return this.userSelect.GetOne(+id);
	}

	@Post()
	@ApiCreatedResponse({ type: String })
	async createUser(@Body() d: CreateUserDTO): Promise<string> {
		let res = await this.userInsert.Create(d);
		return res;
	}

	@Put(':id')
	@ApiCreatedResponse({ type: String })
	async updateUser(@Param('id') id: string, @Body() d: UpdateUserDTO): Promise<string> {
		let res = await this.userUpdate.Update(+id, d);
		return res;
	}

	@Delete(':id')
	@ApiCreatedResponse({ type: String })
	async removeUser(@Param('id') id: string): Promise<string> {
		return await this.userDelete.Delete(+id);
	}
}
