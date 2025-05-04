import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterModule, MainpageComponent, CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  mapUrl: SafeResourceUrl | null = null;
  encodedAddress: string = '';
  apiKey: string = 'AIzaSyDD9-RxvD5HWPuUyO-o2qoi2wnGBFZO4NE';

  constructor(private sanitizer: DomSanitizer) {}

  updateMap(address: string) {
    if (!address) return;

    const query = encodeURIComponent(address);
    const embedUrl = `https://storage.googleapis.com/maps-solutions-xirezl8oo6/neighborhood-discovery/19he/neighborhood-discovery.html`;

    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

}
