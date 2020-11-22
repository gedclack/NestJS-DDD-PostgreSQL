import { Inject, Injectable } from "@nestjs/common";
import { Order } from "../order";
import { IOrderRepo } from "../order-repo.interface";

const OrderRepo = () => Inject('OrderRepo');

@Injectable()
export class Insert {

	constructor(
		@OrderRepo() private readonly repoService: IOrderRepo,
	) {}

	Create(data: Partial<Order>): Promise<string> {
		return this.repoService.Insert(data);
	}
	
}
