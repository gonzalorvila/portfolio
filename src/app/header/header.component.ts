import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  public routeTo(route: string): void {
    console.log(route)
    const url = this.router.url.split('/')
    console.log(url)
    this.router.navigate([`/${route}`])
  }

}
