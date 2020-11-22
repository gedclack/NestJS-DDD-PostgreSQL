import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { DeleteOrder } from 'src/domain/order/actions/delete';
import { Insert } from 'src/domain/order/actions/insert';
import { Select } from 'src/domain/order/actions/select';
import { Update } from 'src/domain/order/actions/update';
import { Order } from 'src/domain/order/order';
import { CreateOrderDTO } from './dto/create-dto';
import { UpdateOrderDTO } from './dto/update-dto';

@ApiTags('order')
@Controller('order')
export class OrderController {

	constructor(
		private orderSelect: Select,
		private orderInsert: Insert,
		private orderUpdate: Update,
		private orderDelete: DeleteOrder
	){}

	@Get()
	@ApiOkResponse({ type: [Order] })
	getOrders(): Promise<Order[]> {
		return this.orderSelect.GetAll();
	}

	@Get(':id')
	@ApiOkResponse({ type: [Order] })
	getOrder(@Param('id') id: string): Promise<Order> {
		return this.orderSelect.GetOne(+id);
	}

	@Post()
	@ApiCreatedResponse({ type: String })
	async createOrder(@Body() d: CreateOrderDTO): Promise<string> {
		let res = await this.orderInsert.Create(d);
		return res;
	}

	@Put(':id')
	@ApiCreatedResponse({ type: String })
	async updateOrder(@Param('id') id: string, @Body() d: UpdateOrderDTO): Promise<string> {
		let res = await this.orderUpdate.Update(+id, d);
		return res;
	}

	@Delete(':id')
	@ApiCreatedResponse({ type: String })
	async removeOrder(@Param('id') id: string): Promise<string> {
		return await this.orderDelete.Delete(+id);
	}
}
