// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

export interface User {
  username: string;
  email: string;
  mobile: string;
  address: string;
  role: 'business' | 'consumer';
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserKey = 'foodWasteAppCurrentUser';
  private usersKey = 'foodWasteAppUsers';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    // Check if user is already logged in (on page refresh)
    const user = localStorage.getItem(this.currentUserKey);
    this.isAuthenticatedSubject.next(!!user);
  }

  // Sign Up (Store user in localStorage)
  signUp(user: User): Observable<boolean> {
    const users = this.getUsers();
    const userExists = users.some(u => u.email === user.email);

    if (userExists) {
      return of(false).pipe(delay(1000)); // Simulate API delay
    }

    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return of(true).pipe(delay(1000));
  }

  // Login (Check credentials)
  login(email: string, password: string): Observable<boolean> {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user));
      this.isAuthenticatedSubject.next(true);
      return of(true).pipe(delay(1000));
    }

    return of(false).pipe(delay(1000));
  }

  // Logout
  logout() {
    localStorage.removeItem(this.currentUserKey);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  // Check if user is logged in
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Get current user
  getCurrentUser(): User | null {
    const user = localStorage.getItem(this.currentUserKey);
    return user ? JSON.parse(user) : null;
  }

  // Get all users (for demo)
  private getUsers(): User[] {
    const users = localStorage.getItem(this.usersKey);
    return users ? JSON.parse(users) : [];
  }
}