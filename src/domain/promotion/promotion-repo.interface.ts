import { Promotion } from "./promotion";

export interface IPromotionRepo {

	GetAll(): Promise<Promotion[]>;
	GetById(id: number): Promise<Promotion>;

	Insert(fields: Partial<Promotion>): Promise<string>;

	Update(id: number, updatedFields: Partial<Promotion>): Promise<string>;

	Delete(id: number): Promise<string>;
	
}
