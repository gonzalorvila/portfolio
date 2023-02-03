import { Component, HostListener } from '@angular/core';
import { Tile } from '../core/core.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  public gridCols = 4;
  public rowHeight = "250px";

  public tiles: Tile[] = [
    {cols: 1, rows: 1, name: "school"},
    {cols: 3, rows: 1, name: "degree"},
  ]

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 888) {
      this.gridCols = 1;
      this.rowHeight = "125px"
      this.tiles[1].cols = 1;
      this.tiles[1].rows = 2;
    } else {
      this.gridCols = 4;
      this.rowHeight = "250px"
      this.tiles[1].cols = 3;
      this.tiles[1].rows = 1;
    }
    if (event.target.innerWidth < 515) {
      this.tiles[1].rows = 3;
    }
  }

  constructor() {
    if (window.innerWidth < 888) {
      this.gridCols = 1;
      this.rowHeight = "125px"
      this.tiles[1].cols = 1;
      this.tiles[1].rows = 2;
    } else {
      this.gridCols = 4;
      this.rowHeight = "250px"
      this.tiles[1].cols = 3;
      this.tiles[1].rows = 1;
    }
    if (window.innerWidth < 515) {
      this.tiles[1].rows = 3;
    }
  }

}
