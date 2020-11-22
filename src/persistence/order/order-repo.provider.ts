import { Provider } from "@nestjs/common";
import { OrderRepoService } from "./order-repo.service";

export const OrderRepoProvider: Provider = {
    provide: 'OrderRepo',
    useClass: OrderRepoService
}