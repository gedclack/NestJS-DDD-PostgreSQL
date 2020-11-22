import { Provider } from "@nestjs/common";
import { PromotionRepoService } from "./promotion-repo.service";

export const PromotionRepoProvider: Provider = {
    provide: 'PromotionRepo',
    useClass: PromotionRepoService
}