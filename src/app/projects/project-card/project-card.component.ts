import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() projectName = '';
  @Input() projectCategory = '';
  @Input() projectDescription = '';
  @Input() projectHighlights: string[] = [];
  @Input() projectTechnologies: string[] = [];
  @Input() projectImage?: string;
  @Input() projectIcon?: string;
  @Input() projectLink = '';
  @Input() projectNumber = 0;
}
