import { Inject, Injectable } from "@nestjs/common";
import { Promotion } from "../promotion";
import { IPromotionRepo } from "../promotion-repo.interface";

const PromotionRepo = () => Inject('PromotionRepo');

@Injectable()
export class Insert {

	constructor(
		@PromotionRepo() private readonly repoService: IPromotionRepo,
	) {}

	Create(data: Partial<Promotion>): Promise<string> {
		return this.repoService.Insert(data);
	}
	
}
