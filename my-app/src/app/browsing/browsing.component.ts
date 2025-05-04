import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../models/restaurant.model';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-browsing',
  standalone: true,
  imports: [CommonModule, 
    MatCardModule, 
    MatIconModule, 
    MatGridListModule, 
    MatFormField, 
    MatLabel, 
    MatSelect, 
    MatOption,
    FormsModule,  
    ReactiveFormsModule],
  templateUrl: './browsing.component.html',
  styleUrls: ['./browsing.component.scss']
})
export class BrowsingComponent {
  restaurants: Restaurant[] = [
    {
      id: 1,
      name: "Amrut Fusion",
      rating: 4.5,
      photo: "assets/images/amrut.jpg",
      deliveryTime: "20-30 min",
      cuisine: "Indian",
    },
    {
      id: 2,
      name: "Nawabi Hyderabadi House",
      rating: 4.2,
      photo: "assets/images/nawabi.jpg",
      deliveryTime: "15-25 min",
      cuisine: "Indian"
    },
    {
      id: 3,
      name: "Spice Mantra",
      rating: 4.0,
      photo: "assets/images/spice-mantra.jpg",
      deliveryTime: "10-20 min",
      cuisine: "Indian"
    },
    {
      id: 4,
      name: "Gol Bowl",
      rating: 4.0,
      photo: "assets/images/gol-bowl.jpg",
      deliveryTime: "10-20 min",
      cuisine: "Indian"
    },
    {
      id: 5,
      name: "Sarku Japan",
      rating: 4.0,
      photo: "assets/images/sarku-japan.jpg",
      deliveryTime: "10-20 min",
      cuisine: "Teppanyaki"
    },
    {
      id: 6,
      name: "Panda Express",
      rating: 4.0,
      photo: "assets/images/panda-express.png",
      deliveryTime: "10-20 min",
      cuisine: "American"
    },
    {
      id: 7,
      name: "Taziki's Mediterranean Cafe",
      rating: 4.0,
      photo: "assets/images/taziki.jpg",
      deliveryTime: "10-20 min",
      cuisine: "Mediterranean"
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
    },
  ];

  filteredRestaurants: Restaurant[] = [];
  availableCuisines: string[] = [];
  selectedCuisine: string = 'all';
  selectedRating: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filteredRestaurants = [...this.restaurants];
    this.availableCuisines = this.getAvailableCuisines();
  }

  getAvailableCuisines(): string[] {
    const cuisines = new Set<string>();
    this.restaurants.forEach(restaurant => cuisines.add(restaurant.cuisine));
    return Array.from(cuisines).sort();
  }

  applyFilters(): void {
    this.filteredRestaurants = this.restaurants.filter(restaurant => {
      // Filter by cuisine
      const cuisineMatch = this.selectedCuisine === 'all' || 
                         restaurant.cuisine === this.selectedCuisine;
      
      // Filter by rating
      const ratingMatch = restaurant.rating >= +this.selectedRating;
      
      return cuisineMatch && ratingMatch;
    });
  }

  ngAfterViewInit() {
    this.applyFilters(); // Ensure filters are applied initially
  }
  viewRestaurant(id: number): void {
    this.router.navigate(['/restaurant-detail', id]);
  }

  getStars(rating: number): { full: number, half: boolean } {
    return {
      full: Math.floor(rating),
      half: rating % 1 >= 0.5
    };
  }
}
