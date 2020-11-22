import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';
import { DomainModule } from './domain/domain.module';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
	imports: [
		TypeOrmModule.forRoot(),
		PersistenceModule,
		ApiModule, 
		DomainModule, 
	],
	controllers: [],
	providers: [],
})
export class AppModule { }
