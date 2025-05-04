// restaurant-detail.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { CommonModule } from '@angular/common';
import { CartItem } from '../cart/cart.service';
import { ScrollUpComponent } from '../scroll-up/scroll-up.component';

interface Restaurant {
    id: number;
    name: string;
    rating: number;
    photo: string;
    deliveryTime: string;
    cuisine: string;
    description?: string;
    address?: string; 
}

interface MenuItem {
  id: number;
  name: string;
  description: string;
  photo: string;
  category: string;
}

interface SurpriseBag {
  id: number;
  name: string;
  description: string;
  price: number;
  contents: string[];
  info: string;
}

@Component({
  selector: 'app-restaurant-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ScrollUpComponent
  ],
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
 
  quantity: number = 1;
  surpriseBag: SurpriseBag | undefined;

  // ... (rest of the constructor and restaurants array remains the same)

  readonly SURPRISE_BAGS: Record<number, SurpriseBag> = {
    1: {
      id: 1,
      name: "Amrut Fusion Surprise Bag",
      description: "A collection of our signature Indian fusion dishes at a discounted price",
      price: 8.99,
      contents: [
        "Starter/ Main Course/ Biryani/ Bread/ Dessert",
      ],
      info: 'Any 3 items from above list'
    },
    2: {
      id: 2,
      name: "Nawabi Royal Feast Surprise Bag",
      description: "Premium selection of Hyderabadi specialties",
      price: 8.99,
      contents: [
        "Biryani + Soup + Starter",
      ],
      info: 'Specials of the day'
    },
    // Add surprise bags for other restaurants as needed
    3: {
      id: 3,
      name: "Spice Mantra Combo Bag",
      description: "Best of our Indian street food favorites",
      price: 5.99,
      contents: [
        "Street food starter",
        "Curry of the day",
        "Butter Naan"
      ],
      info: ''
    },

    4: {
      id: 4,
      name: "Gol Bowl Special Meal",
      description: "A mix of our best Indian street food items",
      price: 4.49,
      contents: [
        "Rice Bowl (Chicken Tikka/Butter Chicken/Chicken Curry/Paneer/Chana) + Naan (or) Biryani + Special Treat"
      ],
      info: ''
    },

    5: {
      id: 5,
      name: "Sarku Japan Surprise Bag",
      description: "A mix of our best Japanese items",
      price: 10.49,
      contents: [
        "Surprise Bento Box + Roll",
      ],
      info: ''
    },

    6: {
      id: 6,
      name: "Panda Express Special",
      description: "A mix of our best American items",
      price: 4.99,
      contents: [
        "Plate with entree and 2 sides",
      ],
      info: ''
    },

    7: {
      id: 7,
      name: "Taziki's Mediterranean Special",
      description: "A mix of our best Mediterranean items",
      price: 12.99,
      contents: [
        "Main Course + Soup + Dessert",
      ],
      info: ''
    },

    8: {
      id: 8,
      name: "Bombay Food Junkies Special",
      description: "A mix of our best Indian items",
      price : 12.99,
      contents: [
        "",
      ],
      info:''
    },

    9: {
      id: 9,
      name: "Sbarro Special",
      description: "A mix of our best Mexican items",
      price: 12.99,
      contents: [
        "Main Course + Soup + Dessert",
      ],
      info: ''
    },

    10: {
      id: 10,
      name: "Namasthey Guntur Special",
      description: "A mix of our best Indian items",
      price: 12.99,
      contents: [
        "Main Course + Soup + Dessert",
      ],
      info: ''
    },

    11: {
      id: 11,
      name: "Bawarchi Indian Cuisine Special",
      description: "A mix of our best Indian items",
      price: 12.99,
      contents: [
        "Main Course + Soup + Dessert",
      ],
      info: ''
    },

    12: {
      id: 12,
      name: "Indian Rasoi Special",
      description: "A mix of our best Indian items",
      price: 12.99,
      contents: [
        "Main Course + Soup + Dessert",
      ],
      info: ''
    },

    13: {
      id: 13,
      name: "Chipotle Mexican Grill Special",
      description: "A mix of our best Mexican items",
      price: 12.99,
      contents: [
        "Main Course + Soup + Dessert",
      ],
      info: ''
    },

    14: {
      id: 14,
      name: "Thai Kitchen Special",
      description: "A mix of our best Thai items",
      price: 12.99,
      contents: [
        "Main Course + Soup + Dessert",
      ],
      info: ''
    },

    15: {
      id: 15,
      name: "Kimchi Guys Special",
      description: "A mix of our best Korean items",
      price: 12.99,
      contents: [
        "Main Course + Soup + Dessert",
      ],
      info: ''
    },

    16: {
      id: 16,
      name: "Anis Hyderabad House Special",
      description: "A mix of our best Indian items",
      price: 12.99,
      contents: [
        "Main Course + Soup + Dessert",
      ],
      info: ''
    },

    17: {
      id: 17,
      name: "101 Asian Cuisine Special",
      description: "A mix of our best Chinese items",
      price: 12.99,
      contents: [
        "Main Course + Soup + Dessert",
      ],
      info: ''
    }
  };
  menuItems: MenuItem[] | undefined;

  // Removed duplicate ngOnInit implementation
  
  loadSurpriseBag(restaurantId: number): void {
    this.surpriseBag = this.SURPRISE_BAGS[restaurantId] || {
      id: 0,
      name: "Chef's Surprise Bag",
      description: "A collection of our best items at a discounted price",
      price: 7.99,
      contents: ["Main Course/ Sides/ Dessert/ Soups/ Biryani/ Bread"]
    };
  }


  constructor(private route: ActivatedRoute, private router: Router) {}

  readonly restaurants: Restaurant[] = [
    {
      id: 1,
      name: "Amrut Fusion",
      rating: 4.5,
      photo: "assets/images/amrut-1.png",
      deliveryTime: "20-30 min",
      cuisine: "Indian",
      address: "17392 Chesterfield Airport Rd, Chesterfield, MO 63005"
    },
    {
      id: 2,
      name: "Nawabi Hyderabadi House",
      rating: 4.2,
      photo: "assets/images/nawabi-1.jpg",
      deliveryTime: "10-15 min",
      cuisine: "Indian",
      address: "12664 Dorsett Rd, Maryland Heights, MO 63043"
    },
    {
      id: 3,
      name: "Spice Mantra",
      rating: 4.0,
      photo: "assets/images/spice-mantra.jpg",
      deliveryTime: "25-30 min",
      cuisine: "Indian",
      address: "226 Mid Rivers Center, St Peters, MO 63376"
    },
    {
      id: 4,
      name: "Gol Bowl",
      rating: 4.0,
      photo: "assets/images/gol-bowl.jpg",
      deliveryTime: "20-30 min",
      cuisine: "Indian",
      address: "6227 Delmar Blvd, St. Louis, MO 63130"
    },
    {
      id: 5,
      name: "Sarku Japan",
      rating: 4.0,
      photo: "assets/images/sarku-japan.jpg",
      deliveryTime: "10-20 min",
      cuisine: "Teppanyaki",
      address: "168 W County Center Dr Unit FC - 3, Des Peres, MO 63131"
    },
    {
      id: 6,
      name: "Panda Express",
      rating: 4.0,
      photo: "assets/images/panda-express.png",
      deliveryTime: "5-10min",
      cuisine: "American",
      address: "10445 Olive Blvd, Creve Coeur, MO 63141"
    },
    {
      id: 7,
      name: "Taziki's Mediterranean Cafe",
      rating: 4.0,
      photo: "assets/images/taziki-1.jpg",
      deliveryTime: "10-20 min",
      cuisine: "Mediterranean",
      address: "12704 Olive Blvd, Creve Coeur"
    },
    {
      id: 8,
      name: "Bombay Food Junkies",
      rating: 4.0,
      photo: "assets/images/bombay-junkies.jpg",
      deliveryTime: "10-20 min",
      cuisine: "Indian"
    },
    {
      id: 9,
      name: "Sbarro",
      rating: 4.0,
      photo: "assets/images/sbarro.jpg",
      deliveryTime: "10-20 min",
      cuisine: "Mexican"
    },
    {
      id: 10,
      name: "Namasthey Guntur",
      rating: 4.0,
      photo: "assets/images/namastey-guntur.jpg",
      deliveryTime: "10-20 min",
      cuisine: "Indian"
    },
    {
      id: 11,
      name: "Bawarchi Indian Cuisine",
      rating: 4.0,
      photo: "assets/images/bawarchi.jpg",
      deliveryTime: "10-20 min",
      cuisine: "Indian"
    },
    {
      id: 12,
      name: "Indian Rasoi",
      rating: 4.0,
      photo: "assets/images/rasoi.jpg",
      deliveryTime: "10-20 min",
      cuisine: "Indian"
    },
    {
      id: 13,
      name: "Chipotle Mexican Grill",
      rating: 4.0,
      photo: "assets/images/chipotle.png",
      deliveryTime: "10-20 min",
      cuisine: "Mexican"
    },
    {
      id: 14,
      name: "Thai Kitchen",
      rating: 4.6,
      photo: "assets/images/thai-kitchen.jpg",
      deliveryTime: "10-20 min",
      cuisine: "Thai"
    },
    {
      id: 15,
      name: "Kimchi Guys",
      rating: 3.7,
      photo: "assets/images/kimchi-guys.png",
      deliveryTime: "10-20 min",
      cuisine: "Korean"
    },
    {
      id: 16,
      name: "Anis Hyderabad House",
      rating: 4.5,
      photo: "assets/images/anis.jpg",
      deliveryTime: "10-20 min", 
      cuisine: "Indian",
    },
    {
      id: 17,
      name: "101 Asian Cuisine",
      rating: 3.0,
      photo: "assets/images/101-asian.jpg",
      deliveryTime: "10-20 min",
      cuisine: "Chineese",
    }
  ];
  
  readonly MENUS: Record<number, MenuItem[]> = {
    1: [
      {
        id: 1,
        name: 'Chicken Lollipops',
        photo: 'assets/images/amrut-items/chicken-lollipops.png',
        description: 'Homemade marinated Chicken wings deep-fried and served with sweet and sour sauce',
        category: 'Starter'
      },
      {
        id: 2,
        name: 'Habanero Wings',
        description: 'Choice of Dish cooked with Habanero Peppers and Homemade Spices',
        photo: 'assets/images/amrut-items/habanero.png',
        category: 'Starter'
      },
      {
      id: 3,
        name: 'Fusion Chicken Wings',
        description: 'Sweet & Hot chicken wings combine the flavours of sweetness & spiciness',
        photo: 'assets/images/amrut-items/fusion-chicken-wings.png',
        category: 'Starter'
      },
      {
        id: 4,
          name: 'Tikka Masala',
          description: '(Paneer or Chicken) A tomato and cream-based sauce with a delicious blend of homemade spices',
          photo: 'assets/images/amrut-items/tikka-masala.png',
          category: 'Main Course'
      },
      {
          id: 5,
            name: 'Chettinad',
            description: '(Mixed Veg, Chicken, Lamb/Goat) Choice of dish cooked with homemade spices and coconut milk',
            photo: 'assets/images/amrut-items/chettinad.png',
            category: 'Main Course'
      },
      {
        id: 6,
          name: 'Royal',
          description: '(Chicken, Goat & Lamb) Choice of dish seasoned in spiced yogurt and cooked with homemade spices',
          photo: 'assets/images/amrut-items/royal.png',
          category: 'Main Course'
      },
      {
        id: 7,
          name: 'Butter Naan',
          description: 'Plain Indian bread tossed with butter',
          photo: 'assets/images/amrut-items/butter-naan.png',
          category: 'Bread'
      },
      {
        id: 8,
          name: 'Amrut Pulau',
          description: '(Vegetable, Chicken, Goat) Made with the Worlds finest Aromatic Rice, offering a rich and luxurious flavor experience',
          photo: 'assets/images/amrut-items/amrut-pulau.png',
          category: 'Biryani'
      },
      {
        id: 9,
          name: 'Tawa Biryani',
          description: '(Vegetable, Chicken, Goat)Choice of protein cooked in Aromatic Basmati rice & homemade spices',
          photo: 'assets/images/amrut-items/tawa-biryani.png',
          category: 'Biryani'
     },
     {
        id: 9,
          name: 'Royal Crispy Bread',
          description: 'Famous in Delhi, Lucknow, and Hyderabad Condensed milk, rose water, khoya, mixed nuts, saffron',
          photo: 'assets/images/amrut-items/crispy-bread.png',
          category: 'Dessert'
     },
     {
      id: 10,
        name: 'Gulab Jamun',
        description: 'A sweet confectionery or dessert made with deep-fried milk balls soaked in homemade thickened sweetened milk, served Hot or Cold',
        photo: 'assets/images/amrut-items/gulab-jamun.png',
        category: 'Dessert'
     },

    ],
    2: [
      {
        id: 1,
        name: 'Kheema Biryani',
        description: 'Savory veggie/ chicken/ lamb mince biryani. ',
        photo: 'assets/images/nawabi/kheema-biryani.jpg',
        category: 'Biryani'
      },
      {
        id: 2,
        name: 'Vijayawada Special Biryani',
        description: 'Biryani featuring fragrant rice and tender egg/ chicken/ paneer/ lamb',
        photo: 'assets/images/nawabi/vjy-biryani.png',
        category: 'Biryani'
      },
      {
        id: 3,
        name: 'Masakali Biryani',
        description: 'Fragrant rice with aromatic spices - chicken/ egg/ paneer',
        photo: 'assets/images/nawabi/masakali.png',
        category: 'Biryani'
      },
      {
        id: 4,
        name: 'Tomato Soup',
        description: 'Creamy tomato soup made with fresh tomatoes',
        photo: 'assets/images/nawabi/tomato-soup.jpg',
        category: 'Soup'
      },
      {
        id: 5,
        name: 'Manchow Soup',
        description: 'Hot, spicy, and savory flavored soup with chicken/vegetables',
        photo: 'assets/images/nawabi/manchow-soup.jpg',
        category: 'Soup'
      },
      {
        id: 6,
        name: 'Corn Soup',
        description: 'Corn and mixed vegetables/ chicken',
        photo: 'assets/images/nawabi/corn-soup.jpg',
        category: 'Soup'
      },
      {
        id: 7,
        name: 'Manchurian',
        description: 'Mixed veg options: babycorn, cauliflower, paneer, and assorted vegetables, melded with spicy and tangy flavors.',
        photo: 'assets/images/nawabi/manchurian.jpg',
        category: 'Starter'
      },
      {
        id: 8,
        name: '65',
        description: 'Assorted 65 vegetables: Babycorn, Gobi (cauliflower), Paneer (Indian cheese), and mixed vegetables.',
        photo: 'assets/images/nawabi/65.jpg',
        category: 'Starter'
      },
      {
        id: 9,
        name: 'Karampodi',
        description: 'Babycorn, cauliflower, paneer, chicken or mixed vegetables with Indian spices.',
        photo: 'assets/images/nawabi/karampodi.jpg',
        category: 'Starter'
      }
    ], 
    3: [
      { 
        id: 1,
        name: 'Chicken Tikka Masala',
        description: 'Chicken marinated in yogurt and spices, grilled and served in a creamy tomato sauce',
        photo: 'assets/images/spice-mantra/chicken-tikka.webp',
        category: 'Main Course'
      },
      {
        id: 2,
        name: 'Paneer Butter Masala',
        description: 'Paneer cubes cooked in a rich and creamy tomato-based gravy',
        photo: 'assets/images/spice-mantra/paneer.jpg',
        category: 'Main Course'
      },
      {
        id: 3,
        name: 'Vegetable Biryani',
        description: 'Aromatic basmati rice cooked with mixed vegetables and spices',
        photo: 'assets/images/spice-mantra/veg-biryani.jpg',
        category: 'Biryani'
      },
      {
        id: 4,
        name: 'Butter Chicken',
        description: 'Tender chicken pieces cooked in a buttery tomato sauce with spices',
        photo: 'assets/images/spice-mantra/butter-chicken.webp',
        category: 'Main Course'
      },
      {
        id: 5,
        name: 'Chicken Biryani',
        description: 'Aromatic basmati rice cooked with tender chicken pieces and spices',
        photo: 'assets/images/spice-mantra/chick-biryani.jpg',
        category: 'Biryani'
      },
      {
        id: 6,
        name: 'Naan',
        description: 'Indian bread made with all-purpose flour, served with butter',
        photo: 'assets/images/spice-mantra/naan.jpg',
        category: 'Bread'
      }
    ],
    4: [
      {
        id: 1,
        name: 'Paneer Rice Bowl',
        description: 'Paneer cubes cooked in a rich and creamy tomato-based gravy served over rice',
        photo: 'assets/images/golbowl/paneer-rice-bowl.jpg',
        category: 'Main Course'
      },
      {
        id: 2,
        name: 'Chicken Tikka Rice Bowl',
        description: 'Chicken marinated in yogurt and spices, grilled and served over rice',
        photo: 'assets/images/golbowl/chickent-tikka-rice-bowl.jpg',
        category: 'Main Course'
      },
      {
        id: 3,
        name: 'Butter Chicken Rice Bowl',
        description: 'Tender chicken pieces cooked in a buttery tomato sauce with spices served over rice',
        photo: 'assets/images/golbowl/butter-chicken-rice-bowl.jpg',
        category: 'Main Course'
      },
      {
        id: 4,
        name: 'Chicken Curry Rice Bowl',
        description: 'Tender chicken pieces cooked in a spicy gravy served over rice',
        photo: 'assets/images/golbowl/chicken-curry.jpg',
        category: 'Main Course'
      },
      {
        id: 5,
        name: 'Channa Rice Bowl',
        description: 'Chickpeas cooked in a spicy gravy served over rice',
        photo: 'assets/images/golbowl/channa-bowl.jpg',
        category: 'Main Course'
      },
      {
        id: 6,
        name: 'Butter Naan',
        description: 'Indian bread served with butter',
        photo: 'assets/images/golbowl/naan.jpg',
        category: 'Bread'
      },
      {
        id: 7,
        name: 'Special Treat',
        description: 'A special treat from the chef',
        photo: 'assets/images/golbowl/special-treat.webp',
        category: 'Any'
      }  
    ],
    5: [
      {
        id: 1,
        name: 'Vegetable Spring Roll',
        description: 'Fresh roll with vegetable filling',
        photo: 'assets/images/sarku-japan/veg-roll.jpg',
        category: 'Starter'
      },
      {
        id: 2,
        name: 'Chicken Roll',
        description: 'Fresh roll with chicken filling',
        photo: 'assets/images/sarku-japan/chicken-roll.jpg',
        category: 'Starter'
      },
      {
        id: 3,
        name: 'Bento Box (Chicken/ Shrimp/ beef)',
        description: 'A traditional Japanese lunch box with a variety of dishes',
        photo: 'assets/images/sarku-japan/bento-box.jpg',
        category: 'Bento Box'
      },
    ],
    6: [ 
      {
        id: 1,
        name: 'Orange Chicken',
        description: 'Battered chicken pieces tossed in a sweet and tangy orange sauce',
        photo: 'assets/images/panda/orange.png',
        category: 'Entree'
      },
      {
        id: 2,
        name: 'Beijing Beef',
        description: 'Crispy beef strips with bell peppers and onions in a sweet and spicy sauce',
        photo: 'assets/images/panda/bbeef.png',
        category: 'Entree'
      },
      {
        id: 3,
        name: 'Kung Pao Chicken',
        description: 'Stir-fried chicken with peanuts, vegetables, and chili peppers in a spicy sauce',
        photo: 'assets/images/panda/kungpao.png',
        category: 'Entree'
      },
      {
        id: 4,
        name: 'Chow Mein',
        description: 'Stir-fried noodles with vegetables and your choice of protein',
        photo: 'assets/images/panda/chowmein.png',
        category: 'Sides'
      },
      {
        id: 5,
        name: 'Fried Rice',
        description: 'Stir-fried rice with vegetables and your choice of protein',
        photo: 'assets/images/panda/fried-rice.png',
        category: 'Sides'
      },
      {
        id: 6,
        name: 'Veggie Spring Rolls',
        description: 'Crispy rolls filled with vegetables',
        photo: 'assets/images/panda/veg-spring-roll.avif',
        category: 'Sides'
      },
      {
        id: 7,
        name: 'Chicken Egg Roll',
        description: 'Crispy rolls filled with chicken and vegetables',
        photo: 'assets/images/panda/chicken-egg.avif',
        category: 'Sides'
      },
      {
        id: 8,
        name: 'Cream Cheese Rangoon',
        description: 'Crispy wontons filled with cream cheese and served with sweet and sour sauce',
        photo: 'assets/images/panda/cream-cheese-ragoon.avif',
        category: 'Sides'
      }
    ],
      }
  
  selectedRestaurant: { id: number; name: string; rating: number; photo: string; deliveryTime: string; cuisine: string, address: string } | undefined;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')) || 1;
    this.selectedRestaurant = this.restaurants.find(r => r.id === id) 
      ? { ...this.restaurants.find(r => r.id === id)!, address: this.restaurants.find(r => r.id === id)!.address || '' }
      : undefined;
    this.loadMenuItems(id);
    this.loadSurpriseBag(id);
  }
  
  
  loadMenuItems(restaurantId: number): void {
    this.menuItems = this.MENUS[restaurantId] || [];
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // No changes needed to the existing code, just ensure addToCart() is as follows:
  addToCart(): void {
    if (this.surpriseBag && this.selectedRestaurant) {
      const cartItem: CartItem = { // Explicitly type as CartItem
        restaurantId: this.selectedRestaurant.id,
        restaurantName: this.selectedRestaurant.name,
        item: this.surpriseBag,
        quantity: this.quantity,
        totalPrice: this.surpriseBag.price * this.quantity,
        paymentMethod: 'pay_on_pickup' // Initialize with default value
      };
      
      localStorage.setItem('cart', JSON.stringify(cartItem));
      this.router.navigate(['/cart']);
    } else {
      alert('No surprise bag selected to add to cart!');
    }
  }

}