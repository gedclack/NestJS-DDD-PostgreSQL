import { Inject, Injectable } from "@nestjs/common";
import { Promotion } from "../promotion";
import { IPromotionRepo } from "../promotion-repo.interface";

const PromotionRepo = () => Inject('PromotionRepo');

@Injectable()
export class Update {

	constructor(
		@PromotionRepo() private readonly repoService: IPromotionRepo,
	) {}

	Update(id: number, data: Partial<Promotion>): Promise<string> {
		return this.repoService.Update(id, data);
	}
	
}
