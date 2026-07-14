import { Component } from '@angular/core';

export interface Experience {
  company: string;
  position: string;
  date: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  public jobExperiences: Experience[] = [
    {
      company: 'Minsait',
      position: 'Software Engineer II',
      date: '2023-Present',
      description: [
        'Own end-to-end front-end implementation of large-scale features across the booking engine, booking manager, and corporate site for a major European airline.',
        'Build reusable Angular components, integrate APIs, and optimize application data management for high-traffic customer journeys.',
        'Partner with eCommerce, UX, QA, and back-end teams to turn product requirements and mockups into polished, production-ready experiences.',
        'Improve reliability and business performance by diagnosing and resolving critical issues throughout the booking flow.'
      ],
      technologies: ['Angular', 'TypeScript', 'SCSS', 'API integration'],
      current: true
    },
    {
      company: 'BUNDLAR',
      position: 'Jr. Software Developer',
      date: '2021-2023',
      description: [
        'Developed and maintained front-end features for an Angular CMS, working closely with Product, UX, and back-end engineering.',
        'Led multiple feature efforts, including several page redesigns and a complete refactor of the application’s global styles.',
        'Introduced Cypress-based automated testing for QA and maintained coverage as the product evolved.',
        'Mentored a junior developer and supported team quality through pair programming and code review.'
      ],
      technologies: ['Angular', 'TypeScript', 'Cypress', 'REST APIs']
    },
    {
      company: 'Saint Louis University',
      position: 'Campus Ambassador',
      date: '2017-2019',
      description: [
        'Worked with the Student Life office to organize and run events such as orientation for approximately 200 students each semester.',
        'Planned events and trips for groups of up to 100 students while serving as an orientation leader and university representative.'
      ],
      technologies: ['Communication', 'Event planning', 'Leadership']
    },
    {
      company: 'Saint Louis University',
      position: 'IT Assistant',
      date: '2017-2018',
      description: [
        'Provided day-to-day technical support for students and faculty at the university’s Madrid campus.',
        'Maintained computers and managed inventory across the campus IT environment.'
      ],
      technologies: ['Technical support', 'IT operations']
    },
  ];
}
