import { EntitySchema } from 'typeorm';
import { Order } from 'src/domain/order/order';

export const OrderSchema = new EntitySchema<Order>({
	name: 'order',
	columns: {
		id: {
			type: Number,
			primary: true,
			generated: true,
		},
		idItem: {
			type: Number,
		},
		qty: {
			type: Number,
		},
		price: {
			type: Number,
		},
	},
});