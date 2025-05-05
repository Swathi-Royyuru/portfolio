import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, isPlatformBrowser } from '@angular/common'; // Add this import
import { TawkService } from '../services/tawk.service';


interface FAQItem {
  id: number;
  question: string;
  answer: string;
  expanded: boolean;
}

interface Resource {
  title: string;
  description: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule],
})
export class SupportComponent {
  faqs: FAQItem[] = [
    {
      id: 1,
      question: ' What is Share-a-Bite?',
      answer: 'Share-a-Bite is a platform that connects restaurants, stores, and individuals with surplus food to nearby users, NGOs, or community centers to reduce food waste and support those in need.',
      expanded: false,
    },
    {
      id: 2,
      question: 'How does Share-a-Bite work?',
      answer: 'Businesses or individuals list surplus food. Nearby users can browse, reserve, and collect available food packages. NGOs can also coordinate pickups for larger distributions.',
      expanded: false,
    },
    {
      id: 3,
      question: 'Is the food safe to consume?',
      answer: 'Yes. Our partners are required to follow food safety standards. We only allow listings of food that is still safe and edible at the time of sharing or pickup.',
      expanded: false
    },
    {
      id: 4,
      question: 'Who can use Share-a-Bite?',
      answer: 'Anyone! Restaurants, grocery stores, individuals with extra food, NGOs, and hungry users who want to reduce waste or access affordable meals.',
      expanded: false
    },
    {
      id: 5,
      question: 'Can I donate homemade food?',
      answer: 'Currently, homemade food donations are allowed only from verified individuals or registered community kitchens to ensure safety and traceability.',
      expanded:false
    }
  ];

  resources: Resource[] = [
    {
      title: 'Food Safety Guide',
      description: 'Learn how to handle and donate food safely.',
      icon: 'food_bank',
      link: '/food-safety',
    },
    {
      title: 'Donation Tips',
      description: 'Best practices for reducing food waste.',
      icon: 'eco',
      link: '/donation-tips',
    },
    {
      title: 'Impact Stories',
      description: 'See how your donations help communities.',
      icon: 'volunteer_activism',
      link: '/impact',
    },
  ];
  isChatLoading: boolean | undefined;

  toggleFaq(id: number): void {
    const faq = this.faqs.find((item) => item.id === id);
    if (faq) {
      faq.expanded = !faq.expanded;
    }
  }

  constructor(private tawkService: TawkService) {}

openChat(): void {
  console.log('Start Chat button clicked');
  this.tawkService.showChat();
  
  // Optional: Add loading state
  this.isChatLoading = true;
  setTimeout(() => this.isChatLoading = false, 2000);
};

}
