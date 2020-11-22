import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { PromotionController } from './promotion/promotion.controller';
import { OrderController } from './order/order.controller';
import { UserController } from './user/user.controller';

@Module({
	imports: [DomainModule],
	controllers: [UserController, OrderController, PromotionController]
})
export class ApiModule {}
