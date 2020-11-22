import { Inject, Injectable } from "@nestjs/common";
import { User } from "../user";
import { IUserRepo } from "../user-repo.interface";

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class Select {

	constructor(
		@UserRepo() private readonly userRepoService: IUserRepo,
	) {}

	GetAll(): Promise<User[]> {
		return this.userRepoService.GetAll();
	}

	GetOne(id: number): Promise<User> {
		return this.userRepoService.GetById(id);
	}
	
}
