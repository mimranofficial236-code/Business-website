import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="terms-hero">
      <div class="hero-bg">
        <div class="hero-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-breadcrumb">
            <a routerLink="/">Home</a>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            <span>Terms of Service</span>
          </div>
          <div class="hero-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            <span>Legal Agreement</span>
          </div>
          <h1>Terms of <span>Service</span></h1>
          <p>Clear, fair terms that protect both your interests and ours. We believe in transparent business relationships built on mutual trust.</p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <strong>Fair & Transparent</strong>
              <span>Clear Policies</span>
            </div>
            <div class="stat-item">
              <div class="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <strong>Legally Compliant</strong>
              <span>UK Standards</span>
            </div>
            <div class="stat-item">
              <div class="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <strong>Client Focused</strong>
              <span>Your Rights</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Navigation -->
    <section class="quick-nav">
      <div class="container">
        <div class="nav-wrapper">
          <h3>Quick Navigation</h3>
          <div class="nav-items">
            <a href="#acceptance" class="nav-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Agreement</span>
            </a>
            <a href="#services" class="nav-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              <span>Services</span>
            </a>
            <a href="#payment" class="nav-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              <span>Payment</span>
            </a>
            <a href="#intellectual" class="nav-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>IP Rights</span>
            </a>
            <a href="#contact-terms" class="nav-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="terms-content">
      <div class="container">
        <div class="content-wrapper">
          <!-- Agreement Section -->
          <div id="acceptance" class="content-section">
            <div class="section-header">
              <div class="section-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div class="section-title">
                <h2>Agreement to Terms</h2>
                <p>By using our services, you agree to these terms</p>
              </div>
            </div>
            <div class="terms-cards">
              <div class="term-card">
                <div class="card-number">01</div>
                <h3>Acceptance</h3>
                <p>By accessing or using BrightBiz Digital's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
              </div>
              <div class="term-card">
                <div class="card-number">02</div>
                <h3>Eligibility</h3>
                <p>You must be at least 18 years old and have the legal authority to enter into these terms on behalf of yourself or your organization.</p>
              </div>
            </div>
          </div>

          <!-- Services Section -->
          <div id="services" class="content-section">
            <div class="section-header">
              <div class="section-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </div>
              <div class="section-title">
                <h2>Our Services</h2>
                <p>What we provide and your responsibilities</p>
              </div>
            </div>
            <div class="services-grid">
              <div class="service-box">
                <div class="box-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h4>Web Design & Development</h4>
                <p>Custom websites, e-commerce, and web applications</p>
              </div>
              <div class="service-box">
                <div class="box-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                </div>
                <h4>SEO & Marketing</h4>
                <p>Search optimization and digital marketing services</p>
              </div>
              <div class="service-box">
                <div class="box-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h4>Maintenance & Support</h4>
                <p>Ongoing website maintenance and technical support</p>
              </div>
            </div>
            <div class="responsibilities-box">
              <h4>Client Responsibilities</h4>
              <ul>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>Provide accurate and complete information for your project</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>Respond to requests for feedback and approvals in a timely manner</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>Ensure you have the rights to any content you provide</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>Make payments according to the agreed schedule</li>
              </ul>
            </div>
          </div>

          <!-- Payment Section -->
          <div id="payment" class="content-section">
            <div class="section-header">
              <div class="section-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              </div>
              <div class="section-title">
                <h2>Payment Terms</h2>
                <p>Billing and payment policies</p>
              </div>
            </div>
            <div class="payment-timeline">
              <div class="timeline-item">
                <div class="timeline-marker">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div class="timeline-content">
                  <h4>50% Deposit</h4>
                  <p>Required before work begins on your project</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div class="timeline-content">
                  <h4>Final Payment</h4>
                  <p>Remaining balance due upon project completion</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div class="timeline-content">
                  <h4>Monthly Services</h4>
                  <p>Billed at the beginning of each month</p>
                </div>
              </div>
            </div>
            <div class="payment-note">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <p><strong>Note:</strong> Late payments may incur additional fees. Please contact us if you need to discuss payment arrangements.</p>
            </div>
          </div>

          <!-- Intellectual Property Section -->
          <div id="intellectual" class="content-section">
            <div class="section-header">
              <div class="section-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <div class="section-title">
                <h2>Intellectual Property</h2>
                <p>Rights and ownership details</p>
              </div>
            </div>
            <div class="ip-grid">
              <div class="ip-card client">
                <div class="card-header">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <h4>Your Rights</h4>
                </div>
                <p>Upon full payment, you will own the final deliverables including all custom designs, code, and content created specifically for your project.</p>
              </div>
              <div class="ip-card agency">
                <div class="card-header">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  <h4>Our Rights</h4>
                </div>
                <p>We retain the right to display work in our portfolio, use for promotional purposes, and retain ownership of pre-existing materials or templates.</p>
              </div>
            </div>
          </div>

          <!-- Additional Terms -->
          <div class="content-section">
            <div class="section-header">
              <div class="section-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div class="section-title">
                <h2>Additional Terms</h2>
                <p>Other important information</p>
              </div>
            </div>
            <div class="accordion-list">
              <div class="accordion-item">
                <div class="accordion-header">
                  <h4>Revisions & Changes</h4>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                <div class="accordion-content">
                  <p>Our packages include a specified number of revision rounds. Additional revisions beyond the agreed scope will be billed at our hourly rate. Major changes to project scope may require a new quote.</p>
                </div>
              </div>
              <div class="accordion-item">
                <div class="accordion-header">
                  <h4>Limitation of Liability</h4>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                <div class="accordion-content">
                  <p>BrightBiz Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service.</p>
                </div>
              </div>
              <div class="accordion-item">
                <div class="accordion-header">
                  <h4>Termination</h4>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                <div class="accordion-content">
                  <p>Either party may terminate the agreement with written notice. Upon termination, you will pay for all work completed, we will provide all completed deliverables, and deposits are non-refundable unless otherwise agreed.</p>
                </div>
              </div>
              <div class="accordion-item">
                <div class="accordion-header">
                  <h4>Governing Law</h4>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                <div class="accordion-content">
                  <p>These terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Section -->
          <div id="contact-terms" class="content-section">
            <div class="contact-card">
              <div class="contact-header">
                <div class="contact-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>
                </div>
                <div class="contact-text">
                  <h2>Questions About Terms?</h2>
                  <p>We're here to help clarify any concerns about our terms of service.</p>
                </div>
              </div>
              <div class="contact-actions">
                <a routerLink="/contact" class="btn-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>
                  Contact Us
                </a>
                <a href="mailto:legal@brightbizdigital.com" class="btn-outline">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Legal Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Last Updated -->
    <section class="last-updated">
      <div class="container">
        <div class="update-info">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>Last updated: January 15, 2026</span>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent {}
