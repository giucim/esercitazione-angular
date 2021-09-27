import { ILocation } from "./location.model";
import { IOrders } from "./orders.model";

export interface IUser {
id: string,
name: string,
surname: string,
mail: string,
imageUrl: string,
location: ILocation,
orders?: IOrders[]

}