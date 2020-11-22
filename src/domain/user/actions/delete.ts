import { Inject, Injectable } from "@nestjs/common";
import { IUserRepo } from "../user-repo.interface";

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class DeleteUser {

	constructor(
		@UserRepo() private readonly userRepoService: IUserRepo,
	) {}

	Delete(userId: number): Promise<string> {
		return this.userRepoService.Delete(userId);
	}
	
}
