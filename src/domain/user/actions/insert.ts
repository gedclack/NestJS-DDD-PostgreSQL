import { Inject, Injectable } from "@nestjs/common";
import { User } from "../user";
import { IUserRepo } from "../user-repo.interface";

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class Insert {

	constructor(
		@UserRepo() private readonly userRepoService: IUserRepo,
	) {}

	Create(data: Partial<User>): Promise<string> {
		return this.userRepoService.Insert(data);
	}
	
}
