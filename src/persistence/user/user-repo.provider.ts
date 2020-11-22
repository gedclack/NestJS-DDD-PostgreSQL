import { Provider } from "@nestjs/common";
import { UserRepoService } from "./user-repo.service";

export const UserRepoProvider: Provider = {
    provide: 'UserRepo',
    useClass: UserRepoService
}