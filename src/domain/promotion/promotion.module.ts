import { Module } from '@nestjs/common';
import { PromotionRepoModule } from 'src/persistence/promotion/promotion-repo.module';
import { DeletePromotion } from './actions/delete';
import { Insert } from './actions/insert';
import { Select } from './actions/select';
import { Update } from './actions/update';

@Module({
	imports: [
		PromotionRepoModule
	],
	providers: [Select, Insert, Update, DeletePromotion],
	exports: [Select, Insert, Update, DeletePromotion]
})
export class PromotionModule { }
