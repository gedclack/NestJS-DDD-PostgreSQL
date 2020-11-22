import { EntitySchema } from 'typeorm';
import { User } from 'src/domain/user/user';

export const UserSchema = new EntitySchema<User>({
	name: 'user',
	columns: {
		id: {
			type: Number,
			primary: true,
			generated: true,
		},
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
	},
});