import { Component } from '@angular/core';

export interface Project {
  name: string,
  description: string,
  imageUrl?: string,
  icon?: string,
  link: string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public currentCard = 0;

  public projects: Project[] = [
    {
      name: 'Java Battleship',
      description:
        "Battleship-style game built using Java and the JavaSWiNG toolkit. Collaborated with a team to create a final project for Object Oriented Software Design class. Each player has 5 boats to place on a 10x10 grid, with the objective of sinking their opponent's ships by guessing a grid location on each turn.",
      imageUrl: '/src/assets/battleship-java.png',
      link: 'https://github.com/gonzalorvila/BattleshipGame'
    },
    {
      name: 'AI@SLU',
      description:
        "AI@SLU is an initiative founded by Saint Louis University to establish itself as one of the leaders in AI research in the St. Louis region. As a final project for Web Technologies class, my team and I were asked to rebuild and redesign the content and structure of their Google Sites website to adhere to the CS SLU website guidelines. This project was built using React, Node, MongoDB, and Express.",
      imageUrl: '/src/assets/ai@slu-react.png',
      link: 'https://github.com/gonzalorvila/AI-SLU'
    },
    {
      name: 'SLUSH',
      description: 'SLUSH is a very simple command-line interpreter with different syntax and less functionality than traditional shells. It executes a loop to display a prompt, reads command line input, and executes it. The syntax of SLUSH is backwards from other shells, and means to emphasize functional nature of pipeline commands. SLUSH also catches ^C command to interrupt the command running. This program was written in C for Operating Systems class.',
      icon: 'keyboard_command_key',
      link: 'https://github.com/gonzalorvila/SLUShell'
    },
    {
      name: 'Crack',
      description: 'Crack is a multi-threaded brute password cracking program that attempts to find the password of a target DES hash given a keysize. It does this by extracting the salt of the hash and repeatedly calling crypt() function with all possible lowercase pawsswords of the specified keysize. This program was written in C for Operating Systems class.',
      icon: 'lock_open',
      link: 'https://github.com/gonzalorvila/Crack'
    },
  ]


  constructor() {}

  public previousCard() {
    this.currentCard = this.currentCard > 0 ? this.currentCard - 1 : this.projects.length - 1;
  }

  public nextCard() {
    this.currentCard = this.currentCard < this.projects.length - 1 ? this.currentCard + 1 : 0;
  }

}
