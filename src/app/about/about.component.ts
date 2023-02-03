import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  name: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public gridCols = 8;
  public showMenu = false;
  public rowHeight = "100px"

  public tiles: Tile[] = [
    {cols: 2, rows: 2, name: "image"},
    {cols: 6, rows: 2, name: "description"},
    {cols: 4, rows: 2, name: "about"},
    {cols: 4, rows: 2, name: "basic info"},
  ]

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 950) {
      this.tiles[2].cols = 8;
      this.tiles[3].cols = 8;
    } else {
      this.tiles[2].cols = 4;
      this.tiles[3].cols = 4;
    }
    if (event.target.innerWidth < 680) {
      this.tiles[0].cols = 3;
      this.tiles[1].cols = 5;
      this.tiles[0].rows = 3;
      this.tiles[1].rows = 3;
    } else {
      this.tiles[0].cols = 2;
      this.tiles[1].cols = 6;
      this.tiles[0].rows = 2;
      this.tiles[1].rows = 2;
    }
    if (event.target.innerWidth < 504) {
      this.rowHeight = "125px";
    } else {
      this.rowHeight = "100px";
    }
    if (event.target.innerWidth < 372) {
      this.tiles[0].cols = this.gridCols;
      this.tiles[0].rows = 1;
      this.tiles[1].cols = this.gridCols;
      this.tiles[1].rows = 2;
      this.rowHeight = "130px"
    }
  }

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    if (window.innerWidth < 950) {
      this.tiles[2].cols = 8;
      this.tiles[3].cols = 8;
    } else {
      this.tiles[2].cols = 4;
      this.tiles[3].cols = 4;
    }
    if (window.innerWidth < 680) {
      this.tiles[0].cols = 3;
      this.tiles[1].cols = 5;
      this.tiles[0].rows = 3;
      this.tiles[1].rows = 3;
    } else {
      this.tiles[0].cols = 2;
      this.tiles[1].cols = 6;
      this.tiles[0].rows = 2;
      this.tiles[1].rows = 2;
    }
    if (window.innerWidth < 504) {
      this.rowHeight = "125px";
    } else {
      this.rowHeight = "100px";
    }
    if (window.innerWidth < 372) {
      this.tiles[0].cols = this.gridCols;
      this.tiles[0].rows = 1;
      this.tiles[1].cols = this.gridCols;
      this.tiles[1].rows = 2;
      this.rowHeight = "130px"
    }
  }
}
