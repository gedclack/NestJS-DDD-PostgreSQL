import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeletePromotion } from 'src/domain/promotion/actions/delete';
import { Insert } from 'src/domain/promotion/actions/insert';
import { Select } from 'src/domain/promotion/actions/select';
import { Update } from 'src/domain/promotion/actions/update';
import { Promotion } from 'src/domain/promotion/promotion';
import { CreatePromotionDTO } from './dto/create-dto';
import { UpdatePromotionDTO } from './dto/update-dto';

@Controller('promotion')
export class PromotionController {

	constructor(
		private promotionSelect: Select,
		private promotionInsert: Insert,
		private promotionUpdate: Update,
		private promotionDelete: DeletePromotion
	){}

	@Get()
	getPromotions(): Promise<Promotion[]> {
		return this.promotionSelect.GetAll();
	}

	@Get(':id')
	getPromotion(@Param('id') id: string): Promise<Promotion> {
		return this.promotionSelect.GetOne(+id);
	}

	@Post()
	async createPromotion(@Body() d: CreatePromotionDTO): Promise<string> {
		let res = await this.promotionInsert.Create(d);
		return res;
	}

	@Put(':id')
	async updatePromotion(@Param('id') id: string, @Body() d: UpdatePromotionDTO) {
		let res = await this.promotionUpdate.Update(+id, d);
		return res;
	}

	@Delete(':id')
	async removePromotion(@Param('id') id: string) {
		return await this.promotionDelete.Delete(+id);
	}
}
