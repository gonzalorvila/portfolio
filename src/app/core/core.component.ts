import { Component } from '@angular/core';


export interface Tile {
  cols: number;
  rows: number;
  name: string;
}

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {

}
