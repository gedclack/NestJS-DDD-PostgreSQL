import { Inject, Injectable } from "@nestjs/common";
import { User } from "../user";
import { IUserRepo } from "../user-repo.interface";

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class Update {

	constructor(
		@UserRepo() private readonly userRepoService: IUserRepo,
	) {}

	Update(userId: number, data: Partial<User>): Promise<string> {
		return this.userRepoService.Update(userId, data);
	}
	
}
