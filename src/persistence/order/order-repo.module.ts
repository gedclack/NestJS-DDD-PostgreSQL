import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepoProvider } from './order-repo.provider';
import { OrderSchema } from './order.entity';

@Module({
	imports: [TypeOrmModule.forFeature([OrderSchema])],
	providers: [OrderRepoProvider],
	exports: [OrderRepoProvider],
})
export class OrderRepoModule {}
