import { Component } from '@angular/core';

export interface Project {
  name: string,
  description: string,
  imageUrl: string,
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
      description: 'Battleship game built using JavaSWiNG toolkit',
      imageUrl: '../../../assets/headshot-square.jpeg',
      link: 'https://github.com/gonzalorvila/JavaBattleShip'
    },
    {
      name: 'SLUSH',
      description: 'Battleship game built using JavaSWiNG toolkit',
      imageUrl: '../../../assets/headshot-square.jpeg',
      link: 'https://github.com/gonzalorvila/JavaBattleShip'
    },
    {
      name: 'Crack',
      description: 'Battleship game built using JavaSWiNG toolkit',
      imageUrl: '../../../assets/headshot-square.jpeg',
      link: 'https://github.com/gonzalorvila/JavaBattleShip'
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
