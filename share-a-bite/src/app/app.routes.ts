import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';



export const appRoutes: Routes = [
  { path: '',
    loadComponent: () => import('./mainpage/mainpage.component').then(m => m.MainpageComponent)
  },
  {
    path: 'mainpage', 
    loadComponent: () => import('./mainpage/mainpage.component').then(m => m.MainpageComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.component').then(m => m.SignUpComponent)
  },
  {
    path: 'signin', 
    loadComponent: () => import('./signin/signin.component').then(m => m.SignInComponent)
  },
  {
    path: 'browsing',
    loadComponent: () => import('./browsing/browsing.component').then(m => m.BrowsingComponent)
  },
  {
    path: 'restaurant-detail/:id',  // Add :id parameter here
    loadComponent: () => import('./restaurant-detail/restaurant-detail.component').then(m => m.RestaurantDetailComponent)
  },
  {
    path: 'privacypolicy', 
    loadComponent: () => import('./privacypolicy/privacypolicy.component').then(m => m.PrivacypolicyComponent)
  },
  {
    path: 'cart', 
    loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'support', 
    loadComponent: () => import('./support/support.component').then(m => m.SupportComponent)
  },
  {
    path: 'terms-and-conditions', 
    loadComponent: () => import('./terms-and-conditions/terms-and-conditions.component').then(m => m.TermsAndConditionsComponent)
  }
  
];


