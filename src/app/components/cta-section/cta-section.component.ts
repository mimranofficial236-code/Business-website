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
          <img src="https://img.icons8.com/fluency/64/rocket.png" alt="" class="cta-icon" />
          <h2>Ready to Grow Your Business?</h2>
          <p>Get a free consultation and discover how we can help you attract more customers.</p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="btn-primary">
              📅 Book Free Consultation
            </a>
            <a href="tel:+1234567890" class="btn-outline">
              📞 Call Us Now
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
