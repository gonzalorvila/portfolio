import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() projectName = '';
  @Input() projectDescription = '';
  @Input() projectImage?: string;
  @Input() projectIcon?: string;
  @Input() projectLink = '';
}
