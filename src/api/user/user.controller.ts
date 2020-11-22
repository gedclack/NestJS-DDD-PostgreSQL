import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeleteUser } from 'src/domain/user/actions/delete';
import { Insert } from 'src/domain/user/actions/insert';
import { Select } from 'src/domain/user/actions/select';
import { Update } from 'src/domain/user/actions/update';
import { User } from 'src/domain/user/user';
import { CreateUserDTO } from './dto/create-dto';
import { UpdateUserDTO } from './dto/update-dto';

@Controller('user')
export class UserController {

	constructor(
		private userSelect: Select,
		private userInsert: Insert,
		private userUpdate: Update,
		private userDelete: DeleteUser
	){}

	@Get()
	getUsers(): Promise<User[]> {
		return this.userSelect.GetAll();
	}

	@Get(':id')
	getUser(@Param('id') id: string): Promise<User> {
		return this.userSelect.GetOne(+id);
	}

	@Post()
	async createUser(@Body() d: CreateUserDTO): Promise<string> {
		let res = await this.userInsert.Create(d);
		return res;
	}

	@Put(':id')
	async updateUser(@Param('id') id: string, @Body() d: UpdateUserDTO) {
		let res = await this.userUpdate.Update(+id, d);
		return res;
	}

	@Delete(':id')
	async removeUser(@Param('id') id: string) {
		return await this.userDelete.Delete(+id);
	}
}
