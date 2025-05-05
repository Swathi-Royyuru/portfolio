import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-up.component.html',
  styleUrl: './scroll-up.component.css'
})
export class ScrollUpComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
