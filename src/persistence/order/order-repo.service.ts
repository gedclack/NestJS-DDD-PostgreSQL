import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/domain/order/order';
import { IOrderRepo } from 'src/domain/order/order-repo.interface';
import { Repository } from 'typeorm';
import { OrderSchema } from './order.entity';

@Injectable()
export class OrderRepoService implements IOrderRepo {

	constructor(
		@InjectRepository(OrderSchema)
		private repo: Repository<Order>,
	) {}

	GetAll(): Promise<Order[]> {
		return this.repo.find();
	}
	GetById(id: number): Promise<Order> {
		return this.repo.findOne(id);
	}

	async Insert(fields: Partial<Order>): Promise<string> {
		const res = await this.repo.insert(fields);
		return `Newly inserted id is: ${res.identifiers[0].id}`;
	}

	async Update(id: number, updatedFields: Partial<Order>): Promise<string> {
		const res = await this.repo.update({ id: id }, updatedFields);
		return `Affected rows: ${res.affected}`;
	}

	async Delete(id: number): Promise<string> {
		const d: Order = await this.repo.findOne(id);
		return this.repo.remove(d)
			.then(res => `Deleted: ${res.id}`);
	}

}
