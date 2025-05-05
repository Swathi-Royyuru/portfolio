// tawk.service.ts
import { Injectable } from '@angular/core';

declare global {
  interface Window {
    Tawk_API?: any;
  }
}

@Injectable({ providedIn: 'root' })
export class TawkService {
  private tawkApi: any;

  constructor() {
    this.initializeTawkApi();
  }

  private initializeTawkApi(): void {
    window.Tawk_API = window.Tawk_API || {};
    this.tawkApi = window.Tawk_API;
  }

  public setUser(name: string, email: string): void {
    if (this.tawkApi) {
      this.tawkApi.setAttributes({
        name: name,
        email: email,
      });
    }
  }

  public setCustomAttributes(attributes: Record<string, any>): void {
    if (this.tawkApi) {
      this.tawkApi.setAttributes(attributes);
    }
  }

  public showChat(): void {
    if (this.tawkApi) {
      this.tawkApi.showWidget();
    }
  }

  public hideChat(): void {
    if (this.tawkApi) {
      this.tawkApi.hideWidget();
    }
  }

  public toggleChat(): void {
    if (this.tawkApi) {
      this.tawkApi.toggle();
    }
  }
}