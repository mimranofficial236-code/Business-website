import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a routerLink="/" class="logo">
              <svg class="logo-icon" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="17" stroke="#F4D35E" stroke-width="2.5"/>
                <path d="M20 12V28M20 12L14 18M20 12L26 18" stroke="#F4D35E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="28" r="2" fill="#F4D35E"/>
              </svg>
              <span class="logo-text">Bright<span class="highlight">Biz</span></span>
            </a>
            <p>Helping local businesses grow online with professional websites and digital marketing solutions.</p>
            <div class="social-links">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/services">Services</a></li>
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/portfolio">Portfolio</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>

          <div class="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a routerLink="/services">Website Design</a></li>
              <li><a routerLink="/services">Google Business Setup</a></li>
              <li><a routerLink="/services">SEO Optimization</a></li>
              <li><a routerLink="/services">Social Media</a></li>
              <li><a routerLink="/services">Maintenance</a></li>
            </ul>
          </div>

          <div class="footer-contact">
            <h4>Get In Touch</h4>
            <ul>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:hello&#64;brightbiz.digital">hello&#64;brightbiz.digital</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>London, UK / New York, US</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 BrightBiz Digital. All rights reserved.</p>
          <div class="footer-legal">
            <a routerLink="/privacy">Privacy Policy</a>
            <a routerLink="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {}
