import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Ready to get started? Let's talk about your project</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form-wrapper">
            <h2>Book Your Free Consultation</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            <form class="contact-form" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" [(ngModel)]="form.name" name="name" placeholder="John Smith" required>
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" [(ngModel)]="form.email" name="email" placeholder="john&#64;example.com" required>
              </div>
              <div class="form-group">
                <label for="phone">WhatsApp / Phone</label>
                <input type="tel" id="phone" [(ngModel)]="form.phone" name="phone" placeholder="+44 7123 456789">
              </div>
              <div class="form-group">
                <label for="service">Service Interested In</label>
                <select id="service" [(ngModel)]="form.service" name="service">
                  <option value="">Select a service</option>
                  <option value="website">Website Design</option>
                  <option value="google">Google Business Setup</option>
                  <option value="seo">SEO & Marketing</option>
                  <option value="social">Social Media Setup</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Tell us about your project</label>
                <textarea id="message" [(ngModel)]="form.message" name="message" rows="4" placeholder="Describe your business and what you're looking for..."></textarea>
              </div>
              <button type="submit" class="btn btn-accent btn-lg full-width">Book Free Consultation</button>
            </form>
          </div>

          <div class="contact-info">
            <div class="info-card">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <h3>Email Us</h3>
              <p>hello&#64;brightbiz.digital</p>
            </div>
            <div class="info-card">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3>Call Us</h3>
              <p>+1 (234) 567-890</p>
            </div>
            <div class="info-card">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3>Location</h3>
              <p>London, UK / New York, US</p>
            </div>
            <div class="info-card highlight">
              <div class="highlight-icon">
                <img src="https://img.icons8.com/fluency/96/rocket.png" alt="Quick Response" />
              </div>
              <div class="highlight-content">
                <h3>Quick Response Guaranteed</h3>
                <p>We typically respond within 24 hours. For urgent inquiries, give us a call!</p>
                <div class="highlight-features">
                  <span>✓ 24hr Response</span>
                  <span>✓ Free Consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    @if (showModal) {
      <div class="modal-overlay" (click)="closeModal()">
        <div class="modal-content" (click)="$event.stopPropagation()">
          <div class="modal-icon">
            <img src="https://img.icons8.com/color/96/ok--v1.png" alt="Success" />
          </div>
          <h2>Thank You!</h2>
          <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
          <div class="modal-info">
            <span>📧 Check your email for confirmation</span>
          </div>
          <button class="btn btn-accent btn-lg" (click)="closeModal()">Got It!</button>
        </div>
      </div>
    }
  `,
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = { name: '', email: '', phone: '', service: '', message: '' };
  showModal = false;

  onSubmit() {
    console.log('Form submitted:', this.form);
    this.showModal = true;
    this.form = { name: '', email: '', phone: '', service: '', message: '' };
  }

  closeModal() {
    this.showModal = false;
  }
}
