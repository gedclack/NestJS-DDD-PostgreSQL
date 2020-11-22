import { Module } from '@nestjs/common';
import { OrderRepoModule } from 'src/persistence/order/order-repo.module';
import { DeleteOrder } from './actions/delete';
import { Insert } from './actions/insert';
import { Select } from './actions/select';
import { Update } from './actions/update';

@Module({
	imports: [
		OrderRepoModule
	],
	providers: [Select, Insert, Update, DeleteOrder],
	exports: [Select, Insert, Update, DeleteOrder]
})
export class OrderModule { }
