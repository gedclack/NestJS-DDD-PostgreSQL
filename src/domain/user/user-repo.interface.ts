import { User } from "./user";

export interface IUserRepo {

	GetAll(): Promise<User[]>;
	GetById(userId: number): Promise<User>;

	Insert(fields: Partial<User>): Promise<string>;

	Update(userId: number, updatedFields: Partial<User>): Promise<string>;

	Delete(userId: number): Promise<string>;
	
}
