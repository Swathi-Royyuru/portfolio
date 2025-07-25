import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface Interest {
  id: number;
  title: string;
  icon: string;
  image: string;
  tags: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  logo: string;
  technologies: string[];
}

interface AboutItem {
  id: number;
  icon: string;
  text: string;
}

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent {

   showScrollButton = false;

// Listen to window scroll events
@HostListener('window:scroll', [])
onWindowScroll() {
  console.log('Scroll position:', window.pageYOffset); // Debug log
  this.showScrollButton = window.pageYOffset > 300;
  console.log('Show button?', this.showScrollButton); // Debug log
  this.scrollY = window.scrollY;
}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  
  activeCard: number | null = null;

  interests: Interest[] = [
    {
      id: 1,
      title: 'Tech Explorer',
      icon: 'fas fa-microchip',
      image: 'tech_explorer.webp',
      tags: ['AI/ML', 'Generative Design tools', 'AI + UX Analytics']
    },
    {
      id: 2,
      title: 'Creative Mind',
      icon: 'fas fa-paint-brush',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Art & Craft', 'Music', ' Graphic Design','Baking']
    },
    {
      id: 3,
      title: 'Other Interests',
      icon: 'fas fa-brain',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Watching Movies', 'Volunteering', 'Gardening']
    }
  ];

  setActiveCard(id: number): void {
    this.activeCard = id;
  }

  clearActiveCard(): void {
    this.activeCard = null;
  }


  activeProject: number | null = null;
  scrollY = 0;

  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Web Design',
      description: 'Created an interactive Figma prototype featuring complete shopping experience with smooth transitions, product browsing, and checkout flow.',
      image: 'ecommerce.png',
      link: 'https://www.figma.com/proto/IxD4hMyQYxvA3aRhSVMF40/Week5-Web-Design--Community-?node-id=1-3542&starting-point-node-id=1%3A3542&t=kCPUiWe9Hy76vvm4-1',
      technologies: ['Figma', 'UI/UX', 'Prototyping']
    },
    {
      id: 2,
      title: 'Food Waste Management',
      description: 'Angular web application connecting restaurants with surplus food to users, to help them get food at lower prices resulting in sustainable food sharing.',
      image: 'fwm.png',
      link: 'https://share-a-bite-nine.vercel.app/',
      technologies: ['Angular', 'Git', 'Bootstrap']
    },
    {
      id: 3,
      title: 'Tech Innovators (Project Proposal)',
      description: 'Designed a client-focused project proposal using Google Sites, featuring intuitive navigation, plan and visuals of project charters, KPIs, and team workflows.',
      image: 'tech_innov.png',
      link: 'https://sites.google.com/view/techinnovproject/home?authuser=0',
      technologies: ['Project Management', 'Google Sites']
    },
    {
      id: 4,
      title: 'McKesson EA Portfolio',
      description: 'Designed a Google Site analyzing EA using TOGAF/Archimate and BPMN, with SWOT analysis for IT optimization and impact on operational maturity and agile leadership.',
      image: 'mckesson.png',
      link: 'https://sites.google.com/view/mckessondemo/home?authuser=0',
      technologies: ['EA (TOGAF)', 'BPMN', 'SWOT']
    }
  ];

  setActiveProject(id: number): void {
    this.activeProject = id;
  }

  clearActiveProject(): void {
    this.activeProject = null;
  }

  // Removed duplicate onWindowScroll

  getParallaxOffset(index: number): string {
    const speed = 0.1 + (index * 0.05);
    return `translateY(${this.scrollY * speed}px)`;
  }

  activeExp: number | null = null;

  experiences: Experience[] = [
    {
      id: 1,
      title: 'Backend Java Developer',
      company: 'Siemens Healthineers (Capgemini) - Bengaluru, IND',
      duration: '2021 – 2023',
      description: 'Contributed to 40+ tasks in a Scrum team using Jira, focusing on backend development for Oracle CPQ CRM. Used Java 8, Git, Jenkins, and SQL databases. Completed 13 sprints, implemented JWT-based security, and collaborated across teams while documenting key features.',
      logo: 'siemens.jpg',
      technologies: ['Java 8', 'Oracle CPQ', 'Jenkins', 'JWT']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Mercedes Benz R&D India (Capgemini) - Bengaluru, IND',
      duration: '2023 – 2023',
      description: 'Demonstrated 2 years of backend development using Java and Spring Boot, while managing 10+ Angular components with HTML, TypeScript, CSS, and Bootstrap. Built RESTful APIs, implemented data binding, event handling, and routing.',
      logo: 'MBRDI.jpeg',
      technologies: ['Angular', 'TypeScript', 'REST APIs', 'Spring Boot']
    },
    {
      id: 3,
      title: 'Project Manager Intern',
      company: 'Excelerate Experiential Learning - St Louis, USA',
      duration: '2025 – 2025',
      description: 'Led a 14-member global team across 5 countries to plan a $30K international event with 650 attendees. Applied leadership and risk analysis to cut projected losses by 70%.',
      logo: 'excelerate.jpeg',
      technologies: ['Project Management', 'Risk Analysis', 'Team Leadership']
    },
    {
      id: 4,
      title: 'Associate Analyst Intern',
      company: 'Excelerate Experiential Learning - St Louis, USA',
      duration: '2025 – 2025',
      description: 'Analyzed 6 datasets for trends and built 2 interactive dashboards to present insights. Designed an ETL workflow for accurate data integration into a Master table.',
      logo: 'excelerate.jpeg',
      technologies: ['Data Analysis', 'ETL', 'Dashboarding']
    }
  ];

  setActiveExp(id: number): void {
    this.activeExp = id;
  }

  clearActiveExp(): void {
    this.activeExp = null;
  }

  activeAbout: number | null = null;

  aboutItems: AboutItem[] = [
    {
      id: 1,
      icon: 'fas fa-laptop-code',
      text: '👩‍💻 I began my professional career in 2021 as a Backend Java Developer at Capgemini Technology Services Ltd., Bengaluru. Over two years, I contributed to enterprise-grade software solutions for global clients including Siemens Healthineers and Mercedes Benz R&D.'
    },
    {
      id: 2,
      icon: 'fas fa-graduation-cap',
      text: '📖 In 2024, I pursued a Master\'s in Information Systems at Saint Louis University (SLU), focusing on bridging technology and business strategy. My studies cover data analytics, cybersecurity, enterprise systems, and web development.'
    },
    {
      id: 3,
      icon: 'fas fa-lightbulb',
      text: '💡 I\'m passionate about using technology to drive efficiency and solve meaningful problems. Whether optimizing backend processes or analyzing business needs, I aim to build solutions that are technically sound and user-centric.'
    }
  ];

  setActiveAbout(id: number): void {
    this.activeAbout = id;
  }

  clearActiveAbout(): void {
    this.activeAbout = null;
  }
}




