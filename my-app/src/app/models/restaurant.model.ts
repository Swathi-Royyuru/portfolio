export interface Restaurant {
    id: number;
    name: string;
    rating: number;
    photo: string;
    deliveryTime: string;
    cuisine: string;
    description?: string;
  }
  
  export interface MenuItem {
    id: number;
    name: string;
    description: string;
    photo: string;
    category: string;
  }
  
  export interface SurpriseBag {
    id: number;
    name: string;
    description: string;
    price: number;
    items: string[];
    photo: string;
    info: string;
  }