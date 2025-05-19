import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../services/portfolio.service';
import { Skill } from '../../../models/skill.model';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  categories: string[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.skills = this.portfolioService.getSkills();
    
  }
}
