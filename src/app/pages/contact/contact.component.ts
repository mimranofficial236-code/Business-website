import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <!-- HERO SECTION -->
    <section class="contact-hero">
      <div class="hero-bg">
        <div class="hero-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            <span>We're Online</span>
          </div>
          <h1>Let's Start a <span>Conversation</span></h1>
          <p>Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing together.</p>
        </div>
      </div>
    </section>

    <!-- MAIN CONTACT SECTION -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-wrapper">
          <!-- Left Side - Contact Info -->
          <div class="contact-info-side">
            <div class="info-header">
              <span class="section-tag">Get in Touch</span>
              <h2>Contact <span>Information</span></h2>
              <p>Fill out the form and our team will get back to you within 24 hours.</p>
            </div>

            <div class="contact-methods">
              <a href="tel:+12345678900" class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div class="method-content">
                  <span class="method-label">Call Us</span>
                  <span class="method-value">+1 (234) 567-8900</span>
                </div>
                <svg class="method-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>

              <a href="mailto:hello@brightbiz.digital" class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div class="method-content">
                  <span class="method-label">Email Us</span>
                  <span class="method-value">hello&#64;brightbiz.digital</span>
                </div>
                <svg class="method-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>

              <a href="#" class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div class="method-content">
                  <span class="method-label">Visit Us</span>
                  <span class="method-value">London, UK & New York, US</span>
                </div>
                <svg class="method-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

            <div class="social-section">
              <span class="social-label">Follow Us</span>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="#" class="social-link" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </a>
                <a href="#" class="social-link" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" class="social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>
                </a>
              </div>
            </div>

            <div class="info-decoration">
              <div class="deco-circle"></div>
              <div class="deco-dots"></div>
            </div>
          </div>

          <!-- Right Side - Contact Form -->
          <div class="contact-form-side">
            <form class="contact-form" (ngSubmit)="onSubmit()">
              <div class="form-header">
                <h3>Send us a Message</h3>
                <p>We'll respond within 24 hours</p>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <div class="input-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <input type="text" id="name" [(ngModel)]="form.name" name="name" placeholder="John Smith" required>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <div class="input-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <input type="email" id="email" [(ngModel)]="form.email" name="email" placeholder="john&#64;example.com" required>
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <div class="input-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                    <input type="tel" id="phone" [(ngModel)]="form.phone" name="phone" placeholder="+1 234 567 8900">
                  </div>
                </div>
                <div class="form-group">
                  <label for="company">Company Name</label>
                  <div class="input-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    <input type="text" id="company" [(ngModel)]="form.company" name="company" placeholder="Your Company">
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="service">Service Needed</label>
                  <div class="input-wrapper select-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
                    <select id="service" [(ngModel)]="form.service" name="service">
                      <option value="">Select a service</option>
                      <option value="website">Website Design</option>
                      <option value="ecommerce">E-Commerce Store</option>
                      <option value="webapp">Web Application</option>
                      <option value="mobile">Mobile App</option>
                      <option value="seo">SEO & Marketing</option>
                      <option value="branding">Branding & Identity</option>
                      <option value="maintenance">Website Maintenance</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="timeline">Project Timeline</label>
                  <div class="input-wrapper select-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <select id="timeline" [(ngModel)]="form.timeline" name="timeline">
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2weeks">1-2 Weeks</option>
                      <option value="1month">Within 1 Month</option>
                      <option value="2-3months">2-3 Months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="form-group full-width">
                <label>Project Budget</label>
                <div class="budget-options">
                  @for (option of budgetOptions; track option.value) {
                    <label class="budget-option" [class.selected]="form.budget === option.value">
                      <input type="radio" name="budget" [value]="option.value" [(ngModel)]="form.budget">
                      <span class="budget-icon">
                        @if (option.icon === 'wallet') {
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12V7H5a2 2 0 010-4h14v4"/><path d="M3 5v14a2 2 0 002 2h16v-5"/><path d="M18 12a2 2 0 100 4 2 2 0 000-4z"/></svg>
                        }
                        @if (option.icon === 'diamond') {
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M2 9h20"/><path d="M12 22L6 9"/><path d="M12 22l6-13"/></svg>
                        }
                        @if (option.icon === 'rocket') {
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                        }
                        @if (option.icon === 'crown') {
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M3 20h18"/></svg>
                        }
                      </span>
                      <span class="budget-label">{{ option.label }}</span>
                    </label>
                  }
                </div>
              </div>

              <div class="form-group full-width">
                <label>How did you hear about us?</label>
                <div class="source-options">
                  @for (source of sourceOptions; track source.value) {
                    <label class="source-option" [class.selected]="form.source === source.value">
                      <input type="radio" name="source" [value]="source.value" [(ngModel)]="form.source">
                      <span class="source-label">{{ source.label }}</span>
                    </label>
                  }
                </div>
              </div>

              <div class="form-group full-width">
                <label for="message">Project Details</label>
                <div class="input-wrapper textarea-wrapper">
                  <textarea id="message" [(ngModel)]="form.message" name="message" rows="4" placeholder="Tell us about your project, goals, and timeline..."></textarea>
                </div>
              </div>

              <button type="submit" class="submit-btn">
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>

              <div class="form-footer">
                <div class="footer-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span>Your data is secure</span>
                </div>
                <div class="footer-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>Response within 24hrs</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">FAQ</span>
          <h2>Frequently Asked <span>Questions</span></h2>
        </div>
        <div class="faq-grid">
          @for (faq of faqs; track faq.question; let i = $index) {
            <div class="faq-item" [class.active]="activeFaq === i" (click)="toggleFaq(i)">
              <div class="faq-question">
                <h4>{{ faq.question }}</h4>
                <div class="faq-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>
              </div>
              <div class="faq-answer">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- MAP SECTION -->
    <section class="map-section">
      <div class="map-overlay">
        <div class="container">
          <div class="map-card">
            <div class="map-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3>Our Offices</h3>
            <div class="office-locations">
              <div class="office">
                <strong>London, UK</strong>
                <span>123 Business Street, EC1A 1BB</span>
              </div>
              <div class="office">
                <strong>New York, US</strong>
                <span>456 Digital Avenue, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119263355!2d-0.38178107691454045!3d51.528735196456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s" 
        width="100%" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
      </iframe>
    </section>

    <!-- CHATBOT -->
    <div class="chatbot-container" [class.open]="chatOpen">
      <!-- Chat Toggle Button -->
      <button class="chat-toggle" (click)="toggleChat()" [class.active]="chatOpen">
        @if (!chatOpen) {
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          <span class="chat-badge" *ngIf="!chatOpen">1</span>
        } @else {
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        }
      </button>

      <!-- Chat Window -->
      <div class="chat-window">
        <div class="chat-header">
          <div class="chat-header-info">
            <div class="chat-avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect x="8" y="8" width="8" height="8" rx="2"/><path d="M12 16v4h4"/><path d="M8 12H4"/><path d="M20 12h-4"/></svg>
            </div>
            <div class="chat-header-text">
              <h4>BrightBot</h4>
              <span class="online-status">
                <span class="status-dot"></span>
                Online now
              </span>
            </div>
          </div>
          <button class="chat-minimize" (click)="toggleChat()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>

        <div class="chat-messages" #chatMessagesContainer>
          @for (msg of chatMessages_list; track $index) {
            <div class="chat-message" [class.bot]="msg.isBot" [class.user]="!msg.isBot">
              @if (msg.isBot) {
                <div class="message-avatar">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect x="8" y="8" width="8" height="8" rx="2"/><path d="M12 16v4h4"/></svg>
                </div>
              }
              <div class="message-bubble">
                <p>{{ msg.text }}</p>
                <span class="message-time">{{ msg.time }}</span>
              </div>
            </div>
          }
          @if (isTyping) {
            <div class="chat-message bot">
              <div class="message-avatar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect x="8" y="8" width="8" height="8" rx="2"/><path d="M12 16v4h4"/></svg>
              </div>
              <div class="message-bubble typing">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
              </div>
            </div>
          }
        </div>

        @if (showQuickReplies) {
          <div class="chat-quick-replies">
            @for (reply of quickReplies; track reply) {
              <button class="quick-reply" (click)="sendQuickReply(reply)">{{ reply }}</button>
            }
          </div>
        }

        <div class="chat-input">
          <input 
            type="text" 
            [(ngModel)]="chatInput" 
            (keyup.enter)="sendMessage()" 
            placeholder="Type your message..."
            name="chatInput"
          >
          <button class="send-btn" (click)="sendMessage()" [disabled]="!chatInput.trim()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    @if (showModal) {
      <div class="modal-overlay" (click)="closeModal()">
        <div class="modal-content" (click)="$event.stopPropagation()">
          <button class="modal-close" (click)="closeModal()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div class="modal-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h2>Message Sent!</h2>
          <p>Thank you for reaching out. We've received your message and will get back to you within 24 hours.</p>
          <div class="modal-actions">
            <button class="btn-primary" (click)="closeModal()">Got It!</button>
          </div>
        </div>
      </div>
    }
  `,
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatMessagesContainer') private chatContainer!: ElementRef;
  
  form = { name: '', email: '', phone: '', company: '', service: '', timeline: '', budget: '', source: '', message: '' };
  showModal = false;
  activeFaq = -1;

  // Chatbot properties
  chatOpen = false;
  chatInput = '';
  isTyping = false;
  showQuickReplies = true;
  chatMessages_list: { text: string; isBot: boolean; time: string }[] = [];
  quickReplies = ['Our Services', 'Get Quote', 'View Portfolio', 'Contact Us', 'Working Hours'];

  budgetOptions = [
    { value: '1k-5k', label: '$1K - $5K', icon: 'wallet' },
    { value: '5k-10k', label: '$5K - $10K', icon: 'diamond' },
    { value: '10k-25k', label: '$10K - $25K', icon: 'rocket' },
    { value: '25k+', label: '$25K+', icon: 'crown' }
  ];

  sourceOptions = [
    { value: 'google', label: 'Google Search' },
    { value: 'social', label: 'Social Media' },
    { value: 'referral', label: 'Referral' },
    { value: 'ads', label: 'Online Ads' },
    { value: 'other', label: 'Other' }
  ];

  faqs = [
    { question: 'How long does a typical project take?', answer: 'Most projects are completed within 2-6 weeks depending on complexity. We\'ll provide a detailed timeline during our initial consultation.' },
    { question: 'What is your pricing structure?', answer: 'We offer flexible pricing based on project scope. Our packages start from $1,000 for basic websites to custom enterprise solutions.' },
    { question: 'Do you offer ongoing support?', answer: 'Yes! We provide 24/7 support and maintenance packages to ensure your digital presence stays up-to-date and secure.' },
    { question: 'Can I see examples of your work?', answer: 'Absolutely! Check out our portfolio page to see our recent projects across various industries.' }
  ];

  onSubmit() {
    console.log('Form submitted:', this.form);
    this.showModal = true;
    this.form = { name: '', email: '', phone: '', company: '', service: '', timeline: '', budget: '', source: '', message: '' };
  }

  closeModal() {
    this.showModal = false;
  }

  toggleFaq(index: number) {
    this.activeFaq = this.activeFaq === index ? -1 : index;
  }

  // Chatbot methods
  ngOnInit() {
    // Initialize welcome message
    this.chatMessages_list = [
      {
        text: "Hi there! I'm BrightBot, your virtual assistant at BrightBiz Digital. How can I help you today?",
        isBot: true,
        time: this.getCurrentTime(),
      },
    ];
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      if (this.chatContainer) {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }
    } catch (err) {}
  }

  getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  toggleChat() {
    this.chatOpen = !this.chatOpen;
  }

  sendMessage() {
    const trimmedInput = this.chatInput.trim();
    if (!trimmedInput) return;

    // Hide quick replies after first message
    this.showQuickReplies = false;

    // Add user message
    this.chatMessages_list.push({
      text: trimmedInput,
      isBot: false,
      time: this.getCurrentTime(),
    });

    const userMessage = trimmedInput.toLowerCase();
    this.chatInput = '';
    this.isTyping = true;

    // Simulate typing delay before showing response
    const thinkingDelay = Math.min(800 + userMessage.length * 15, 1500);

    setTimeout(() => {
      this.isTyping = false;
      const fullResponse = this.getBotResponse(userMessage);

      // Add empty message that will be typed out
      const messageIndex = this.chatMessages_list.length;
      this.chatMessages_list.push({
        text: '',
        isBot: true,
        time: this.getCurrentTime(),
      });

      // Typewriter effect
      this.typeMessage(messageIndex, fullResponse, 0);
    }, thinkingDelay);
  }

  typeMessage(index: number, fullText: string, charIndex: number) {
    if (charIndex < fullText.length) {
      // Add characters in chunks for smoother effect
      const chunkSize = Math.random() > 0.8 ? 3 : 2;
      const nextChunk = fullText.substring(charIndex, charIndex + chunkSize);
      this.chatMessages_list[index].text += nextChunk;

      // Random delay for natural typing feel
      const delay = Math.random() * 20 + 10;
      setTimeout(() => {
        this.typeMessage(index, fullText, charIndex + chunkSize);
      }, delay);
    }
  }

  sendQuickReply(reply: string) {
    this.chatInput = reply;
    this.sendMessage();
  }

  getBotResponse(message: string): string {
    const msg = message.toLowerCase().trim();

    // Bot Identity / Name
    if (this.matchesAny(msg, ['your name', 'who are you', 'what is your name', 'whats your name', "what's your name", 'naam', 'tumhara naam', 'apka naam', 'kon ho', 'kaun ho', 'bot name', 'name kya hai', 'apna naam'])) {
      return "I'm BrightBot! Your friendly virtual assistant at BrightBiz Digital. I'm here 24/7 to help you with any questions. Nice to meet you!";
    }

    // Bot capabilities
    if (this.matchesAny(msg, ['what can you do', 'kya kar sakta', 'kya kar sakti', 'how can you help', 'capabilities', 'features'])) {
      return "I can help you with lots of things!\n\n- Answer questions about services\n- Provide pricing information\n- Share portfolio & work samples\n- Give contact details\n- Explain our process\n\nJust ask me anything!";
    }

    // Greetings
    if (this.matchesAny(msg, ['hello', 'hi', 'hey', 'hola', 'good morning', 'good afternoon', 'good evening', 'assalam', 'salam', 'aoa', 'howdy', 'hii', 'hiii', 'helloo'])) {
      const greetings = [
        "Hello! Welcome to BrightBiz Digital! How can I assist you today?",
        "Hi there! Great to see you! What brings you here today?",
        "Hey! I'm BrightBot, ready to help you!",
        "Hello! Thanks for reaching out! How can I help?"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // How are you
    if (this.matchesAny(msg, ['how are you', 'how r u', 'kaise ho', 'kaisa hai', 'kya haal', 'whats up', "what's up", 'sup', 'hows it going'])) {
      return "I'm doing great, thanks for asking! How can I help you today?";
    }

    // Services - General
    if (this.matchesAny(msg, ['service', 'services', 'what do you do', 'what you do', 'offer', 'our services', 'kya karte ho', 'provide'])) {
      return "We offer:\n\n- Website Design\n- E-Commerce\n- Web Applications\n- Mobile Apps\n- SEO & Marketing\n- Branding\n- Maintenance\n\nWhich interests you?";
    }

    // Website Design
    if (this.matchesAny(msg, ['website', 'web design', 'site', 'webpage', 'landing page', 'wordpress', 'cms'])) {
      return "Website Design:\n\n- Custom responsive designs\n- WordPress & CMS\n- Landing pages\n- Corporate websites\n\nFrom $1,000 | 1-3 weeks\n\nWant a quote?";
    }

    // E-commerce
    if (this.matchesAny(msg, ['ecommerce', 'e-commerce', 'online store', 'shop', 'shopify', 'woocommerce', 'sell online', 'store'])) {
      return "E-Commerce:\n\n- Shopify stores\n- WooCommerce\n- Payment integration\n- Inventory systems\n\nFrom $2,500 | 2-4 weeks\n\nReady to sell online?";
    }

    // Mobile App
    if (this.matchesAny(msg, ['mobile', 'app', 'ios', 'android', 'application', 'react native', 'flutter', 'mobile app'])) {
      return "Mobile Apps:\n\n- iOS & Android\n- React Native, Flutter\n- UI/UX design\n- App maintenance\n\nFrom $5,000 | 6-12 weeks\n\nTell me your app idea!";
    }

    // SEO & Marketing
    if (this.matchesAny(msg, ['seo', 'marketing', 'digital marketing', 'google', 'ads', 'advertising', 'social media', 'facebook', 'instagram', 'promote', 'traffic'])) {
      return "SEO & Marketing:\n\n- Search Engine Optimization\n- Google Ads\n- Social Media Marketing\n- Content Marketing\n\nFrom $500/month\n\nWant to grow online?";
    }

    // Branding
    if (this.matchesAny(msg, ['branding', 'brand', 'logo', 'identity', 'design', 'graphic'])) {
      return "Branding:\n\n- Logo design\n- Brand identity\n- Business cards\n- Brand guidelines\n\nFrom $500 | 1-2 weeks\n\nLet's create your brand!";
    }

    // Pricing / Quote
    if (this.matchesAny(msg, ['price', 'pricing', 'cost', 'quote', 'budget', 'how much', 'rate', 'fee', 'get quote', 'kitna', 'kitne', 'charges', 'payment'])) {
      return "Pricing:\n\n- Website: $1,000 - $5,000\n- E-Commerce: $2,500 - $15,000\n- Mobile App: $5,000 - $50,000\n- SEO: $500 - $3,000/mo\n- Branding: $500 - $3,000\n\nFree consultation included!\n\nWant a custom quote?";
    }

    // Portfolio
    if (this.matchesAny(msg, ['portfolio', 'work', 'example', 'project', 'case study', 'view portfolio', 'previous work', 'samples', 'show me', 'clients'])) {
      return "Our Portfolio:\n\n- 200+ projects completed\n- 150+ happy clients\n- 50+ industries served\n\nVisit /portfolio to see our work!\n\nAny specific industry?";
    }

    // Contact Info
    if (this.matchesAny(msg, ['contact', 'email', 'phone', 'call', 'reach', 'contact us', 'talk', 'speak', 'address', 'location', 'office'])) {
      return "Contact Us:\n\nEmail: hello@brightbiz.digital\nPhone: +1 (234) 567-8900\n\nOffices in London & New York\n\nOr fill out the form above!";
    }

    // Timeline / Duration
    if (this.matchesAny(msg, ['time', 'how long', 'duration', 'timeline', 'deadline', 'when', 'delivery', 'kitna time', 'kab tak'])) {
      return "Timelines:\n\n- Website: 1-2 weeks\n- E-Commerce: 2-4 weeks\n- Web App: 4-8 weeks\n- Mobile App: 6-12 weeks\n\nRush delivery available!\n\nWhat's your deadline?";
    }

    // Working Hours
    if (this.matchesAny(msg, ['hours', 'working hours', 'open', 'available', 'timing', 'schedule', 'kab available'])) {
      return "Working Hours:\n\nMon-Fri: 9AM - 6PM\nSaturday: 10AM - 4PM\nSunday: Closed\n\nBrightBot is available 24/7!";
    }

    // Support / Help
    if (this.matchesAny(msg, ['support', 'maintenance', 'update', 'fix', 'issue', 'problem', 'bug', 'error', 'not working', 'help'])) {
      return "Support:\n\n- 24/7 Technical Support\n- Monthly Maintenance\n- Bug fixes\n- Security updates\n\nFrom $100/month\n\nHaving an issue?";
    }

    // About Company
    if (this.matchesAny(msg, ['about', 'company', 'team', 'brightbiz', 'about us', 'history', 'founded', 'experience'])) {
      return "About BrightBiz:\n\nFounded: 2014\nTeam: 50+ experts\nOffices: UK & US\nProjects: 200+ completed\nRating: 4.9/5 stars\n\nVisit our About page!";
    }

    // Process / How it works
    if (this.matchesAny(msg, ['process', 'how it works', 'steps', 'workflow', 'start', 'begin', 'procedure', 'kaise hota hai'])) {
      return "Our Process:\n\n1. Discovery Call\n2. Proposal & Quote\n3. Design Phase\n4. Development\n5. Launch & Support\n\nReady to start?";
    }

    // Payment
    if (this.matchesAny(msg, ['payment', 'pay', 'payment method', 'credit card', 'paypal', 'bank transfer', 'installment'])) {
      return "Payment Options:\n\n- Credit/Debit Cards\n- PayPal\n- Bank Transfer\n- Installment plans\n\n50% upfront, 50% on completion\n\nAll payments are secure!";
    }

    // Technologies
    if (this.matchesAny(msg, ['technology', 'technologies', 'tech stack', 'programming', 'language', 'framework', 'react', 'angular', 'node', 'python'])) {
      return "Our Tech Stack:\n\nFrontend: React, Angular, Vue.js\nBackend: Node.js, Python, PHP\nMobile: React Native, Flutter\nCloud: AWS, Google Cloud\n\nWe use the best tech!";
    }

    // Thank you
    if (this.matchesAny(msg, ['thank', 'thanks', 'thx', 'appreciate', 'great', 'awesome', 'perfect', 'shukriya', 'dhanyawad'])) {
      return "You're welcome! Anything else I can help with?";
    }

    // Bye / Goodbye
    if (this.matchesAny(msg, ['bye', 'goodbye', 'see you', 'later', 'exit', 'close', 'alvida', 'khuda hafiz'])) {
      return "Goodbye! Thanks for chatting! Come back anytime!";
    }

    // Yes / Interested
    if (this.matchesAny(msg, ['yes', 'yeah', 'sure', 'okay', 'ok', 'interested', 'tell me more', 'haan', 'ji'])) {
      return "Awesome!\n\n1. Fill out the form above\n2. Call: +1 (234) 567-8900\n3. Email: hello@brightbiz.digital\n\nOr tell me about your project!";
    }

    // No / Not interested
    if (this.matchesAny(msg, ['no', 'nope', 'not now', 'later', 'nahi', 'not interested'])) {
      return "No problem! Take your time. I'm here whenever you're ready!";
    }

    // Joke / Fun
    if (this.matchesAny(msg, ['joke', 'funny', 'laugh', 'humor', 'fun'])) {
      return "Here's a tech joke!\n\nWhy do programmers prefer dark mode?\n\nBecause light attracts bugs!\n\nHow can I help you?";
    }

    // Default response
    return "Thanks for your message!\n\nI can help with:\n- Services\n- Pricing\n- Portfolio\n- Contact\n- Timelines\n\nWhat would you like to know?";
  }

  private matchesAny(message: string, keywords: string[]): boolean {
    return keywords.some((keyword) => message.includes(keyword));
  }
}
