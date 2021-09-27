import { IProducts } from "./product.model";

export interface IOrders {
     id: string,
     date: string,
     product: IProducts,
     quantity: number,

}