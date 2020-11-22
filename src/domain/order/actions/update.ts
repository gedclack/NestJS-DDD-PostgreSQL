import { Inject, Injectable } from "@nestjs/common";
import { Order } from "../order";
import { IOrderRepo } from "../order-repo.interface";

const OrderRepo = () => Inject('OrderRepo');

@Injectable()
export class Update {

	constructor(
		@OrderRepo() private readonly repoService: IOrderRepo,
	) {}

	Update(id: number, data: Partial<Order>): Promise<string> {
		return this.repoService.Update(id, data);
	}
	
}
