import { Module } from '@nestjs/common';
import { PromotionModule } from 'src/domain/promotion/promotion.module';
import { OrderRepoModule } from './order/order-repo.module';
import { UserRepoModule } from './user/user-repo.module';

@Module({
  imports: [UserRepoModule, OrderRepoModule, PromotionModule],
  exports: [UserRepoModule, OrderRepoModule, PromotionModule],
})
export class PersistenceModule {}
