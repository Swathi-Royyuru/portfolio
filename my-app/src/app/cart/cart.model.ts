import { SurpriseBag } from "../models/restaurant.model";

export interface CartItem {
    id: string;
    restaurantId: number;
    item: SurpriseBag;
    price: number;
    quantity: number;
    imageUrl?: string;
    paymentMethod: string; 
  }
  