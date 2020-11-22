import { EntitySchema } from 'typeorm';
import { Promotion } from 'src/domain/promotion/promotion';

export const PromotionSchema = new EntitySchema<Promotion>({
	name: 'promotion',
	columns: {
		id: {
			type: Number,
			primary: true,
			generated: true,
		},
		tgl: {
			type: Date,
		},
		idItem: {
			type: Number,
		},
		disc: {
			type: Number,
		},
	},
});