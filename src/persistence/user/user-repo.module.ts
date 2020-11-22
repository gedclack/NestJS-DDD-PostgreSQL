import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepoProvider } from './user-repo.provider';
import { UserSchema } from './user.entity';

@Module({
	imports: [TypeOrmModule.forFeature([UserSchema])],
	providers: [UserRepoProvider],
	exports: [UserRepoProvider],
})
export class UserRepoModule {}
