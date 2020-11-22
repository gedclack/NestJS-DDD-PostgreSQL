import { Inject, Injectable } from "@nestjs/common";
import { Order } from "../order";
import { IOrderRepo } from "../order-repo.interface";

const OrderRepo = () => Inject('OrderRepo');

@Injectable()
export class Select {

	constructor(
		@OrderRepo() private readonly repoService: IOrderRepo,
	) {}

	GetAll(): Promise<Order[]> {
		return this.repoService.GetAll();
	}

	GetOne(id: number): Promise<Order> {
		return this.repoService.GetById(id);
	}
	
}
