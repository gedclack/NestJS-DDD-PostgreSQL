import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromotionRepoProvider } from './promotion-repo.provider';
import { PromotionSchema } from './promotion.entity';

@Module({
	imports: [TypeOrmModule.forFeature([PromotionSchema])],
	providers: [PromotionRepoProvider],
	exports: [PromotionRepoProvider],
})
export class PromotionRepoModule {}
