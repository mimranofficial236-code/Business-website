import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Testimonials</span>
          <h2>What Our <span>Clients Say</span></h2>
          <p>Don't just take our word for it. Here's what business owners say about us.</p>
        </div>

        <div class="testimonials-grid">
          @for (testimonial of testimonials; track testimonial.name) {
            <div class="testimonial-card">
              <div class="card-header">
                <img [src]="testimonial.avatar" [alt]="testimonial.name" class="avatar" />
                <div class="info">
                  <strong>{{ testimonial.name }}</strong>
                  <span>{{ testimonial.business }}</span>
                </div>
                <div class="rating">★★★★★</div>
              </div>
              <p class="quote">"{{ testimonial.text }}"</p>
            </div>
          }
        </div>

        <div class="trust-badges">
          <div class="badge-item">
            <img src="https://img.icons8.com/fluency/48/security-checked.png" alt="" />
            <span>100% Secure</span>
          </div>
          <div class="badge-item">
            <img src="https://img.icons8.com/fluency/48/customer-support.png" alt="" />
            <span>24/7 Support</span>
          </div>
          <div class="badge-item">
            <img src="https://img.icons8.com/fluency/48/guarantee.png" alt="" />
            <span>Money Back</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80',
      business: 'Mitchell\'s Bakery, London',
      text: 'BrightBiz transformed our online presence completely. Within weeks, we saw a 40% increase in online orders. Highly recommend!'
    },
    {
      name: 'James Thompson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
      business: 'Thompson Plumbing, Manchester',
      text: 'As a local tradesman, I never thought I needed a website. Now I get most of my leads through Google!'
    },
    {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80',
      business: 'Bloom Florist, New York',
      text: 'The team made the whole process so easy. My flower shop now appears at the top of local searches!'
    }
  ];
}
