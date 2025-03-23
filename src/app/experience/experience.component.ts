import { Component } from '@angular/core';

  export interface Experience {
    company: string;
    position: string;
    date: string;
    description: string[];
    expanded?: boolean;
  }

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  protected jobExperiences: Experience[] = [
    {
      company: 'Minsait',
      position: 'Software Engineer II',
      date: '2023-Present',
      description: [
        'Implement and maintain major features of the Booking Engine, Booking Manager, and Corporate site for a major European airline using Angular, Typescript, HTMl, and SCSS.',
        'Own end-to-end front-end implementation of large scale features, developing new components, optimizing data management, and integrating APIs.',
        'Work closely with back-end engineers to integrate and refine API endpoints, ensuring seamless data flow and system performance.',
        'Collaborate with client eCommerce, UX, and QA teams to transform mockups into polished UIs, address technical concerns, and ensure smooth feature deployments.',
        'Improve system reliability and business performance by identifying and resolving critical bugs in the high-traffic booking engine.',
        'Engage in Agile development, using regular check-ins and code reviews, ensuring high quality, maintainable code across the front-end team.'
      ],
      expanded: true
    },
    {
      company: 'BUNDLAR',
      position: 'Jr. Software Developer',
      date: '2021-2023',
      description: [
        'Developed and maintained front-end features on an Angular CMS project using HTML, CSS, and TypeScript.',
        'Worked in an agile team with daily stand-ups, kept track of tickets and user stories on Jira, and participated in sprint planning and story generation meetings.',
        'Worked closely with Product and UX teams to understand feature requests and give feedback on user stories.',
        'Led and planned the development efforts of multiple features, including the redesign of multiple pages within the CMS, as well as a total refactor of global styles.',
        'Collaborated with backend team to implement features that made API requests or integrated both front and backend systems.',
        'Set up automated testing framework for the QA team using Cypress. Helped maintain automated tests when new features were added.',
        'Mentored a junior developer, enabling them to quickly get onboarded, learn the system, and start working on features.',
        'Pair programmed with other engineers and reviewed their code to ensure that only high-quality, error-free codewas merged.'
      ],
    },
    {
      company: 'Saint Louis University',
      position: 'Campus Ambassador',
      date: '2017-2019',
      description: [
        'Worked with the Student Life office to organize and run events such as orientation for approximately 200 students each semester.',
        'Planned and chaperoned group trips for approximately 100 students to cities surrounding Madrid.',
        'Managed and organized events for up to 70 university students including graduation, advised students as an orientation leader and first contact, responded to frequently asked questions, collaborated with university staff, participated in student panels and represented the university.'
      ],
    },
    {
      company: 'Saint Louis University',
      position: 'IT Assistant',
      date: '2017-2018',
      description: [
        'Worked at the it office in Saint Louis University Madrid Campus.',
        'Updated computers and helped students and profeessors with any technical difficulties.',
        'Kept inventory of all computers, monitors, and other accessories of Saint Louis University.'
      ],
    },
  ];
}
