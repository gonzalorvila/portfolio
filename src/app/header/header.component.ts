import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 697) {
      this.showChevron = true;
    } else {
      this.showChevron = false;
    }
  }

  public showChevron = false;

  constructor(private router: Router) {
    if (window.innerWidth < 697) {
      this.showChevron = true;
    } else {
      this.showChevron = false;
    }
  }

  public routeTo(route: string): void {
    this.router.navigate([`/${route}`])
  }

  public scrollRight() {
    let lastElement = document.getElementById('header-navbar-contact')
    lastElement.scrollIntoView({behavior: "smooth"})

  }

}
