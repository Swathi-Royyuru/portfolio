import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface Skill {
  id: string;
  name: string;
  image: string;
  level: number;
  orbitSize: number;
  orbitSpeed: number;
  startAngle: number;
  description: string;
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

  //Interests Section
 stars = [
  // Inner orbit stars - close to center
  { orbitSize: 140, orbitSpeed: 20, startAngle: 20, class: 'star small blue pointed' },
  { orbitSize: 140, orbitSpeed: 20, startAngle: 80, class: 'star medium white' },
  { orbitSize: 140, orbitSpeed: 20, startAngle: 140, class: 'star small green sparkly' },
  { orbitSize: 230, orbitSpeed: 20, startAngle: 200, class: 'star medium' },
  { orbitSize: 140, orbitSpeed: 20, startAngle: 260, class: 'star small blue' },
  { orbitSize: 140, orbitSpeed: 20, startAngle: 320, class: 'star medium green pointed' },
  
  // Middle orbit stars
  { orbitSize: 180, orbitSpeed: 10, startAngle: 40, class: 'star large white sparkly' },
  { orbitSize: 220, orbitSpeed: 10, startAngle: 100, class: 'star small' },
  { orbitSize: 180, orbitSpeed: 10, startAngle: 160, class: 'star medium blue pointed' },
  { orbitSize: 220, orbitSpeed: 10, startAngle: 220, class: 'star large green' },
  { orbitSize: 220, orbitSpeed: 10, startAngle: 280, class: 'star small white sparkly' },
  { orbitSize: 180, orbitSpeed: 10, startAngle: 340, class: 'star medium blue' },
  
  // Outer orbit stars
  { orbitSize: 230, orbitSpeed: 20, startAngle: 60, class: 'star large pointed' },
  { orbitSize: 160, orbitSpeed: 20, startAngle: 120, class: 'star medium green sparkly' },
  { orbitSize: 220, orbitSpeed: 20, startAngle: 180, class: 'star large white' },
  { orbitSize: 200, orbitSpeed: 20, startAngle: 240, class: 'star medium blue pointed' },
  { orbitSize: 220, orbitSpeed: 20, startAngle: 300, class: 'star small green' },
  { orbitSize: 170, orbitSpeed: 40, startAngle: 360, class: 'star large blue sparkly' },
  
  // Extra outer orbit stars
  { orbitSize: 210, orbitSpeed: 50, startAngle: 30, class: 'star medium white pointed' },
  { orbitSize: 190, orbitSpeed: 50, startAngle: 90, class: 'star large green' },
  { orbitSize: 230, orbitSpeed: 50, startAngle: 360, class: 'star small blue sparkly' },
  { orbitSize: 170, orbitSpeed: 50, startAngle: 210, class: 'star medium' },
  { orbitSize: 240, orbitSpeed: 50, startAngle: 270, class: 'star large white pointed' },
  { orbitSize: 230, orbitSpeed: 50, startAngle: 360, class: 'star small green' }
];

  activeSkill: string | null = null;
  panelPosition = { x: 0, y: 0 };

  // Individual skills with separate orbit properties
  individualSkills: Skill[] = [
    { 
      id: 'generative-design', 
      name: 'Generative Design', 
      image: 'genai.png',
      level: 75,
      orbitSize: 140,
      orbitSpeed: 18,
      startAngle: 0,
      description: 'Creating AI integrated dynamic designs that evolve and adapt to different parameters.'
    },
    { 
      id: 'art-craft', 
      name: 'Art & Craft', 
      image: 'art&craft.png',
      level: 90,
      orbitSize: 190,
      orbitSpeed: 18,
      startAngle: 45,
      description: 'I like spending time on hands-made crafts, drawings and paintings.'
    },
    { 
      id: 'music', 
      name: 'Music', 
      image: 'sing.png',
      level: 100,
      orbitSize: 240,
      orbitSpeed: 18,
      startAngle: 90,
      description: 'I appreciate music across different genres and instruments and love singing.'
    },
    { 
      id: 'graphic-design', 
      name: 'Graphic Design', 
      image: 'graphic.png',
      level: 80,
      orbitSize: 270,
      orbitSpeed: 18,
      startAngle: 135,
      description: 'Designing visual content that communicates messages effectively and aesthetically.'
    },
    { 
      id: 'baking', 
      name: 'Baking', 
      image: 'baking.png',
      level: 75,
      orbitSize: 160,
      orbitSpeed: 18,
      startAngle: 180,
      description: 'I experiment with recipes and techniques to create delicious baked goods.'
    },
    { 
      id: 'movies', 
      name: 'Movies', 
      image: 'movies.png',
      level: 85,
      orbitSize: 200,
      orbitSpeed: 18,
      startAngle: 225,
      description: 'I love exploring cinematic storytelling across different genres and cultures.'
    },
    { 
      id: 'volunteering', 
      name: 'Volunteering', 
      image: 'volunteer.png',
      level: 75,
      orbitSize: 240,
      orbitSpeed: 18,
      startAngle: 270,
      description: 'Contributing to community initiatives and supporting meaningful causes brings peace to my soul.'
    },
    { 
      id: 'gardening', 
      name: 'Gardening', 
      image: 'gardening.png',
      level: 75,
      orbitSize: 270,
      orbitSpeed: 18,
      startAngle: 315,
      description: 'Cultivating plants and creating beautiful green spaces soothes my mind.'
    }
  ];


  setActiveSkill(skillId: string, event: MouseEvent): void {
    this.activeSkill = skillId;
    
    // Position of the hovered element
    const element = event.target as HTMLElement;
    const orbitalSkill = element.closest('.orbital-skill') as HTMLElement;
    
    if (orbitalSkill) {
      const rect = orbitalSkill.getBoundingClientRect();
      const orbitContainer = document.querySelector('.individual-orbit')?.getBoundingClientRect();
      
      if (orbitContainer) {
        // Calculate position relative to orbit container
        const skillCenterX = rect.left + rect.width / 2 - orbitContainer.left;
        const skillCenterY = rect.top + rect.height / 2 - orbitContainer.top;
        
        // Determine panel position based on skill position
        this.calculatePanelPosition(skillCenterX, skillCenterY, orbitContainer);
      }
    }
  }

  calculatePanelPosition(skillX: number, skillY: number, container: DOMRect): void {
    const panelWidth = 280;
    const panelHeight = 350;
    const margin = 20;
    let x = skillX + 80;
    let y = skillY - panelHeight / 2;
    if (x + panelWidth > container.width - margin) {
      x = skillX - panelWidth - 80; 
    }
    if (y < margin) {
      y = margin;
    } else if (y + panelHeight > container.height - margin) {
      y = container.height - panelHeight - margin;
    }
    
    this.panelPosition = { x, y };
  }

  clearActiveSkill(): void {
    this.activeSkill = null;
  }

  getSkillDescription(skillId: string | null): Skill | null {
    return skillId ? this.individualSkills.find(skill => skill.id === skillId) || null : null;
  }

getResponsiveOrbitSize(): number {
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    return width < 768 ? 250 : 350;
  }
  // Default value for server-side
  return 300;
}

getSkillOrbitProperties(skill: any): any {
  const responsiveSize = skill.orbitSize;
  return {
    size: responsiveSize,
    speed: skill.orbitSpeed,
    angle: skill.startAngle
  };
}

//Projects Section
  activeProject: number | null = null;
  scrollY = 0;

  projects: Project[] = [
    {
      id: 1,
      title: 'SheDev - AI Analytics Platform ',
      description: 'Developed a full-stack web application with Flask, Angular, and PostgreSQL, featuring interactive dashboards, responsive UI/UX, and real-time data insights, reducing manual reporting and enhancing user engagement.',
      image: 'shedev.png',
      link: '',
      technologies: ['Angular', 'Flask', 'Data Analytics', 'PostgreSQL', 'API Integration']
    },
    {
      id: 2,
      title: 'LABL App Inc. – Style  Sync',
      description: 'Revamped Style Sync’s UI/UX by developing a cohesive design system with a refined color palette and typography, enhancing brand appeal for fashion-conscious women aged 18–25. Designed and implemented 6 scalable UI components and high-fidelity screens, improving prototype usability and doubling user engagement.',
      image: 'stylesync.png',
      link: 'https://www.figma.com/proto/AvPsZ8qZDb3sZwot99SfMN/StyleSync?node-id=24-2&starting-point-node-id=24%3A2&t=SimaxVg8KouAoYYi-1',
      technologies: ['Prototyping', 'Branding', 'Interaction Design', 'User Research']
    },
    {
      id: 3,
      title: 'Share-A-Bite: Food Waste Management App',
      description: 'Angular web application connecting restaurants with surplus food to users, to help them get food at lower prices resulting in sustainable food sharing.',
      image: 'fwm.png',
      link: 'https://share-a-bite-nine.vercel.app/',
      technologies: ['Angular', 'Git', 'Bootstrap']
    },
    {
      id: 4,
      title: 'E-Commerce Web Design',
      description: ' Designed a 4-page Figma prototype featuring streamlined user flows for intuitive and efficient user interaction.',
      image: 'ecommerce.png',
      link: 'https://www.figma.com/proto/IxD4hMyQYxvA3aRhSVMF40/Week5-Web-Design--Community-?node-id=1-3542&starting-point-node-id=1%3A3542&t=kCPUiWe9Hy76vvm4-1',
      technologies: ['Figma', 'UI/UX', 'Prototyping']
    },
    {
      id: 5,
      title: 'Tech Innovators (Project Proposal Site)',
      description: 'Designed a client-focused project proposal using Google Sites, featuring intuitive navigation, plan and visuals of project charters, KPIs, and team workflows.',
      image: 'tech_innov.png',
      link: 'https://sites.google.com/view/techinnovproject/home?authuser=0',
      technologies: ['Project Management', 'Google Sites']
    },
    {
      id: 6,
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
      title: 'Frontend Developer (Angular)',
      company: 'Mercedes Benz R&D India (Capgemini) - Bengaluru, IND',
      duration: 'Mar 2023 – Dec 2023',
      description: 'Demonstrated 2 years of backend development expertise using Java and Spring Boot, delivering user stories that included 10+ reusable Angular components with responsive Bootstrap layouts, boosting user engagement by 80%. Enhanced front-end performance through advanced DOM manipulation, event handling, form validation, routing, and implementation of 3 RESTful APIs for seamless module communication. Achieved quality targets by analyzing 50+ test reports, identifying and resolving defects, conducting code reviews, and maintaining detailed technical documentation.',
      logo: 'MBRDI.jpeg',
      technologies: ['Angular', 'TypeScript', 'REST APIs', 'BootStrap']
    },
    {
      id: 2,
      title: 'Backend Developer (J2EE)',
      company: 'Siemens Healthineers (Capgemini) - Bengaluru, IND',
      duration: 'Nov 2021 – Feb 2023',
      description: 'Delivered impactful contributions to an Oracle Sales Cloud–based CPQ CRM system by resolving 40+ bugs, defects, and user stories using Jira. Improved backend efficiency through advanced Java 8 features (Lambdas, Streams, Functional Interfaces) and enhanced security with JWT-based authorization. Collaborated across three departments during 13 sprints to drive high-quality, agile software delivery.',
      logo: 'siemens.jpg',
      technologies: ['Java 8', 'Oracle CPQ', 'CRM', 'Spring Boot']
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




