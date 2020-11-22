import { Module } from '@nestjs/common';
import { UserRepoModule } from 'src/persistence/user/user-repo.module';
import { DeleteUser } from './actions/delete';
import { Insert } from './actions/insert';
import { Select } from './actions/select';
import { Update } from './actions/update';

@Module({
	imports: [
		UserRepoModule
	],
	providers: [Select, Insert, Update, DeleteUser],
	exports: [Select, Insert, Update, DeleteUser]
})
export class UserModule { }
