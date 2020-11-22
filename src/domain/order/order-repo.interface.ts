import { Order } from "./order";

export interface IOrderRepo {

	GetAll(): Promise<Order[]>;
	GetById(id: number): Promise<Order>;

	Insert(fields: Partial<Order>): Promise<string>;

	Update(id: number, updatedFields: Partial<Order>): Promise<string>;

	Delete(id: number): Promise<string>;
	
}
