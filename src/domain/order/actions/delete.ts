import { Inject, Injectable } from "@nestjs/common";
import { IOrderRepo } from "../order-repo.interface";

const OrderRepo = () => Inject('OrderRepo');

@Injectable()
export class DeleteOrder {

	constructor(
		@OrderRepo() private readonly repoService: IOrderRepo,
	) {}

	Delete(id: number): Promise<string> {
		return this.repoService.Delete(id);
	}
	
}
