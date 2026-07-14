import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  public menuOpen = false;
  public activeSection = 'about';
  public isDarkMode = false;

  private sectionObserver?: IntersectionObserver;
  private sectionVisibility = new Map<string, number>();

  public ngOnInit(): void {
    const storedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    const preferredTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    this.applyTheme(storedTheme ?? preferredTheme);
  }

  public ngAfterViewInit(): void {
    const scrollContainer = document.querySelector('.page-content');
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));

    if (!('IntersectionObserver' in window)) {
      return;
    }

    this.sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        this.sectionVisibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
      });

      const mostVisibleSection = Array.from(this.sectionVisibility.entries())
        .sort((first, second) => second[1] - first[1])
        .find(([, visibility]) => visibility > 0);

      if (mostVisibleSection) {
        this.activeSection = mostVisibleSection[0];
      }
    }, {
      root: scrollContainer,
      rootMargin: '-15% 0px -55% 0px',
      threshold: [0, 0.1, 0.25, 0.5]
    });

    sections.forEach(section => {
      this.sectionVisibility.set(section.id, 0);
      this.sectionObserver?.observe(section);
    });
  }

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  public closeMenu(): void {
    this.menuOpen = false;
  }

  public selectSection(section: string): void {
    this.activeSection = section;
    this.closeMenu();
  }

  public toggleTheme(): void {
    const theme: Theme = this.isDarkMode ? 'light' : 'dark';
    this.applyTheme(theme);
    localStorage.setItem('portfolio-theme', theme);
  }

  public ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  private applyTheme(theme: Theme): void {
    this.isDarkMode = theme === 'dark';
    document.documentElement.dataset['theme'] = theme;

    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    themeColor?.setAttribute('content', this.isDarkMode ? '#0b1020' : '#f7f8fc');
  }
}
