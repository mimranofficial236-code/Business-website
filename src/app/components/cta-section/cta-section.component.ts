import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="cta-section">
      <div class="cta-bg">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop&q=90" alt="" />
        <div class="cta-overlay"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <svg class="cta-icon" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
          </svg>
          <h2>Ready to Grow Your Business?</h2>
          <p>Get a free consultation and discover how we can help you attract more customers.</p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book Free Consultation
            </a>
            <a href="tel:+1234567890" class="btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Us Now
            </a>
          </div>
          <div class="cta-features">
            <span>✓ Free Consultation</span>
            <span>✓ No Commitment</span>
            <span>✓ 100% Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./cta-section.component.scss']
})
export class CtaSectionComponent {}
