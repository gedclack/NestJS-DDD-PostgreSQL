import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeleteOrder } from 'src/domain/order/actions/delete';
import { Insert } from 'src/domain/order/actions/insert';
import { Select } from 'src/domain/order/actions/select';
import { Update } from 'src/domain/order/actions/update';
import { Order } from 'src/domain/order/order';
import { CreateOrderDTO } from './dto/create-dto';
import { UpdateOrderDTO } from './dto/update-dto';

@Controller('order')
export class OrderController {

	constructor(
		private orderSelect: Select,
		private orderInsert: Insert,
		private orderUpdate: Update,
		private orderDelete: DeleteOrder
	){}

	@Get()
	getOrders(): Promise<Order[]> {
		return this.orderSelect.GetAll();
	}

	@Get(':id')
	getOrder(@Param('id') id: string): Promise<Order> {
		return this.orderSelect.GetOne(+id);
	}

	@Post()
	async createOrder(@Body() d: CreateOrderDTO): Promise<string> {
		let res = await this.orderInsert.Create(d);
		return res;
	}

	@Put(':id')
	async updateOrder(@Param('id') id: string, @Body() d: UpdateOrderDTO) {
		let res = await this.orderUpdate.Update(+id, d);
		return res;
	}

	@Delete(':id')
	async removeOrder(@Param('id') id: string) {
		return await this.orderDelete.Delete(+id);
	}
}
