import { Routes } from '@angular/router'; 
import { AppComponent } from './app.component';

export const routes: Routes = [

 { path: '',
    loadComponent: () => import('./mainpage/mainpage.component').then(m => m.MainpageComponent)
  },
  {
    path: 'mainpage', 
    loadComponent: () => import('./mainpage/mainpage.component').then(m => m.MainpageComponent)
  },


];