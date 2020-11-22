import { Inject, Injectable } from "@nestjs/common";
import { Promotion } from "../promotion";
import { IPromotionRepo } from "../promotion-repo.interface";

const PromotionRepo = () => Inject('PromotionRepo');

@Injectable()
export class Select {

	constructor(
		@PromotionRepo() private readonly repoService: IPromotionRepo,
	) {}

	GetAll(): Promise<Promotion[]> {
		return this.repoService.GetAll();
	}

	GetOne(id: number): Promise<Promotion> {
		return this.repoService.GetById(id);
	}
	
}
