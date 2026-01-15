import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()">
      <div class="container nav-container">
        <a routerLink="/" class="logo">
          <svg class="logo-icon" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="17" stroke="#00d4ff" stroke-width="2.5"/>
            <path d="M20 12V28M20 12L14 18M20 12L26 18" stroke="#00d4ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="20" cy="28" r="2" fill="#7c3aed"/>
          </svg>
          <span class="logo-text">Bright<span class="highlight">Biz</span></span>
        </a>

        <button class="mobile-toggle" [class.active]="mobileMenuOpen()" (click)="toggleMobile()">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="nav-menu" [class.open]="mobileMenuOpen()">
          <ul class="nav-links">
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMobile()">Home</a></li>
            <li><a routerLink="/services" routerLinkActive="active" (click)="closeMobile()">Services</a></li>
            <li><a routerLink="/about" routerLinkActive="active" (click)="closeMobile()">About</a></li>
            <li><a routerLink="/portfolio" routerLinkActive="active" (click)="closeMobile()">Portfolio</a></li>
            <li><a routerLink="/contact" routerLinkActive="active" (click)="closeMobile()">Contact</a></li>
          </ul>
          <a routerLink="/contact" class="btn btn-accent nav-cta" (click)="closeMobile()">Get Started</a>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobile() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobile() {
    this.mobileMenuOpen.set(false);
  }
}
