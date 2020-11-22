import { Inject, Injectable } from "@nestjs/common";
import { IPromotionRepo } from "../promotion-repo.interface";

const PromotionRepo = () => Inject('PromotionRepo');

@Injectable()
export class DeletePromotion {

	constructor(
		@PromotionRepo() private readonly repoService: IPromotionRepo,
	) {}

	Delete(id: number): Promise<string> {
		return this.repoService.Delete(id);
	}
	
}
