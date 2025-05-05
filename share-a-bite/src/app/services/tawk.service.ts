// tawk.service.ts
import { Injectable } from '@angular/core';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

@Injectable({ providedIn: 'root' })
export class TawkService {
  private isLoaded = false;
  private maxRetries = 3;
  private retryCount = 0;
  private retryDelay = 500; // milliseconds

  constructor() {
    this.loadTawkTo();
  }

  private loadTawkTo(): void {
    if (this.isLoaded || document.getElementById('tawk-script')) return;

    const script = document.createElement('script');
    script.id = 'tawk-script';
    script.async = true;
    script.src = 'https://share-a-bite-nine.vercel.app/support';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    script.onload = () => {
      console.log('Tawk.to script loaded successfully');
      this.isLoaded = true;
      this.initializeAPI();
    };
    
    script.onerror = () => {
      console.error('Tawk.to script failed to load');
      this.retryLoading();
    };

    document.head.appendChild(script);
  }

  private retryLoading(): void {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      console.log(`Retrying Tawk.to load (attempt ${this.retryCount})`);
      setTimeout(() => this.loadTawkTo(), this.retryDelay);
    } else {
      console.error('Max retries reached for Tawk.to loading');
    }
  }

  private initializeAPI(): void {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    
    // Add ready state listener
    window.Tawk_API.onLoad = () => {
      console.log('Tawk_API is fully ready');
    };
  }

  public showChat(): void {
    if (!this.isLoaded) {
      console.warn('Tawk.to not loaded yet, will retry...');
      setTimeout(() => this.showChat(), this.retryDelay);
      return;
    }

    if (window.Tawk_API && window.Tawk_API.showWidget) {
      console.log('Opening Tawk.to chat');
      window.Tawk_API.showWidget();
      window.Tawk_API.maximize();
    } else {
      console.error('Tawk_API methods not available');
      this.fallbackChat();
    }
  }

  private fallbackChat(): void {
    // Alternative solution if Tawk.to fails
    console.warn('Using fallback chat solution');
    window.open('https://tawk.to/chat/6818fa28affc0219158afa50/1iqgp2bcj', '_blank');
  }
}