import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/user/user';
import { IUserRepo } from 'src/domain/user/user-repo.interface';
import { Repository } from 'typeorm';
import { UserSchema } from './user.entity';

@Injectable()
export class UserRepoService implements IUserRepo {

	constructor(
		@InjectRepository(UserSchema)
		private user: Repository<User>,
	) {}

	GetAll(): Promise<User[]> {
		return this.user.find();
	}
	GetById(userId: number): Promise<User> {
		return this.user.findOne(userId);
	}

	async Insert(fields: Partial<User>): Promise<string> {
		const res = await this.user.insert(fields);
		return `Newly inserted id is: ${res.identifiers[0].id}`;
	}

	async Update(userId: number, updatedFields: Partial<User>): Promise<string> {
		const res = await this.user.update({ id: userId }, updatedFields);
		return `Affected rows: ${res.affected}`;
	}

	async Delete(userId: number): Promise<string> {
		const d: User = await this.user.findOne(userId);
		return this.user.remove(d)
			.then(res => `Deleted: ${res.firstName}`);
	}

}
