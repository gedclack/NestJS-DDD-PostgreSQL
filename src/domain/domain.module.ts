import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { PromotionModule } from './promotion/promotion.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, OrderModule, PromotionModule],
  exports: [UserModule, OrderModule, PromotionModule],
})
export class DomainModule {}
