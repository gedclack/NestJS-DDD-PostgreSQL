import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Promotion } from 'src/domain/promotion/promotion';
import { IPromotionRepo } from 'src/domain/promotion/promotion-repo.interface';
import { Repository } from 'typeorm';
import { PromotionSchema } from './promotion.entity';

@Injectable()
export class PromotionRepoService implements IPromotionRepo {

	constructor(
		@InjectRepository(PromotionSchema)
		private repo: Repository<Promotion>,
	) {}

	GetAll(): Promise<Promotion[]> {
		return this.repo.find();
	}
	GetById(id: number): Promise<Promotion> {
		return this.repo.findOne(id);
	}

	async Insert(fields: Partial<Promotion>): Promise<string> {
		const res = await this.repo.insert(fields);
		return `Newly inserted id is: ${res.identifiers[0].id}`;
	}

	async Update(id: number, updatedFields: Partial<Promotion>): Promise<string> {
		const res = await this.repo.update({ id: id }, updatedFields);
		return `Affected rows: ${res.affected}`;
	}

	async Delete(id: number): Promise<string> {
		const d: Promotion = await this.repo.findOne(id);
		return this.repo.remove(d)
			.then(res => `Deleted: ${res.id}`);
	}

}
