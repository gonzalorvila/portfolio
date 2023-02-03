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
    if (event.target.innerWidth <= 460) {
      this.showFullTitle = false;
    } else {
      this.showFullTitle = true;
    }
  }

  public showChevron: boolean = false;
  public showFullTitle: boolean = true;

  constructor(private router: Router) {
    if (window.innerWidth <= 460) {
      this.showFullTitle = false;
    } else {
      this.showFullTitle = true;
    }
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
