import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeletePromotion } from 'src/domain/promotion/actions/delete';
import { Insert } from 'src/domain/promotion/actions/insert';
import { Select } from 'src/domain/promotion/actions/select';
import { Update } from 'src/domain/promotion/actions/update';
import { Promotion } from 'src/domain/promotion/promotion';
import { CreatePromotionDTO } from './dto/create-dto';
import { UpdatePromotionDTO } from './dto/update-dto';

@Controller('order')
export class PromotionController {

	constructor(
		private orderSelect: Select,
		private orderInsert: Insert,
		private orderUpdate: Update,
		private orderDelete: DeletePromotion
	){}

	@Get()
	getPromotions(): Promise<Promotion[]> {
		return this.orderSelect.GetAll();
	}

	@Get(':id')
	getPromotion(@Param('id') id: string): Promise<Promotion> {
		return this.orderSelect.GetOne(+id);
	}

	@Post()
	async createPromotion(@Body() d: CreatePromotionDTO): Promise<string> {
		let res = await this.orderInsert.Create(d);
		return res;
	}

	@Put(':id')
	async updatePromotion(@Param('id') id: string, @Body() d: UpdatePromotionDTO) {
		let res = await this.orderUpdate.Update(+id, d);
		return res;
	}

	@Delete(':id')
	async removePromotion(@Param('id') id: string) {
		return await this.orderDelete.Delete(+id);
	}
}
