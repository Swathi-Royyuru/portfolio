import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterModule, CommonModule, MatIcon, MatCard, MatCardHeader, MatCardTitle, MatCardContent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  stats = [
    { value: '1.3B', label: 'Tons wasted globally each year', icon: 'public' },
    { value: '30%', label: 'Of all food produced is wasted', icon: 'pie_chart' },
    { value: '$1T', label: 'Economic cost annually', icon: 'attach_money' }
  ];

  features = [
    {
      icon: 'track_changes',
      title: 'Waste Tracking',
      description: 'Log and categorize your food waste to identify patterns'
    },
    {
      icon: 'insights',
      title: 'Analytics Dashboard',
      description: 'Visualize your waste data with actionable insights'
    },
    {
      icon: 'eco',
      title: 'Sustainability Tips',
      description: 'Get personalized recommendations to reduce waste'
    },
    {
      icon: 'share',
      title: 'Community Sharing',
      description: 'Connect with others to donate surplus food'
    }
  ];

  testimonials = [
    {
      quote: "Reduced our food waste by 40% in just 2 months!",
      author: "Sarah K., Restaurant Owner"
    },
    {
      quote: "The analytics helped us optimize our inventory perfectly.",
      author: "Mike T., Grocery Manager"
    }
  ];
}