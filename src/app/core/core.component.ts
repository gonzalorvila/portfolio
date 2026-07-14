import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements AfterViewInit, OnDestroy {
  private revealObserver?: IntersectionObserver;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  public ngAfterViewInit(): void {
    const revealElements = Array.from(this.elementRef.nativeElement.querySelectorAll<HTMLElement>([
      '.hero-copy',
      '.hero-visual',
      '.about-surface',
      '#education-grid-list',
      '.experience-section .section-heading',
      '.timeline-item',
      '.projects-section .section-heading',
      'app-project-card',
      '#contact-grid-list'
    ].join(',')));

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach(element => element.classList.add('reveal-visible'));
      return;
    }

    revealElements.forEach((element, index) => {
      element.classList.add('reveal');
      element.style.setProperty('--reveal-delay', `${(index % 4) * 65}ms`);
    });

    this.revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('reveal-visible');
        this.revealObserver?.unobserve(entry.target);
      });
    }, {
      root: this.elementRef.nativeElement.querySelector('.page-content'),
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.12
    });

    revealElements.forEach(element => this.revealObserver?.observe(element));
  }

  public ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }
}
