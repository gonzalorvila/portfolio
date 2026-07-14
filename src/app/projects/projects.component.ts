import { Component } from '@angular/core';

export interface Project {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  imageUrl?: string;
  icon?: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public projects: Project[] = [
    {
      name: 'Java Battleship',
      category: 'Desktop application',
      description: 'A turn-based Battleship game created collaboratively as an object-oriented software design project.',
      highlights: [
        'Built the complete 10×10 game flow and ship-placement experience',
        'Applied object-oriented design in a collaborative Java codebase'
      ],
      technologies: ['Java', 'Swing', 'OOP'],
      imageUrl: 'assets/battleship-java.png',
      link: 'https://github.com/gonzalorvila/BattleshipGame'
    },
    {
      name: 'AI@SLU',
      category: 'Full-stack web application',
      description: 'A team-led redesign and rebuild of Saint Louis University’s AI initiative website.',
      highlights: [
        'Restructured the site content around university web guidelines',
        'Delivered a full-stack JavaScript application with a React interface'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      imageUrl: 'assets/ai@slu-react.png',
      link: 'https://github.com/gonzalorvila/AI-SLU'
    },
    {
      name: 'SLUSH',
      category: 'Systems programming',
      description: 'A lightweight command-line interpreter with functional, reverse-order pipeline syntax.',
      highlights: [
        'Implemented command parsing and pipeline execution',
        'Added signal handling for interrupting active commands'
      ],
      technologies: ['C', 'POSIX', 'Operating Systems'],
      icon: 'keyboard_command_key',
      link: 'https://github.com/gonzalorvila/SLUShell'
    },
    {
      name: 'Crack',
      category: 'Concurrent programming',
      description: 'A multi-threaded program that searches a defined keyspace for the password behind a target DES hash.',
      highlights: [
        'Distributed brute-force work across multiple threads',
        'Handled DES salt extraction and repeated crypt() comparisons'
      ],
      technologies: ['C', 'Multithreading', 'DES'],
      icon: 'lock_open',
      link: 'https://github.com/gonzalorvila/Crack'
    }
  ];
}
