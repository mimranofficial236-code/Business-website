import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Privacy Policy</h1>
        <p>Last updated: January 2026</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="legal-content">
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include:</p>
          <ul>
            <li>Name and contact information (email, phone number)</li>
            <li>Business name and website URL</li>
            <li>Project requirements and preferences</li>
            <li>Payment information for services rendered</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:</p>
          <ul>
            <li>To trusted third parties who assist us in operating our website and conducting our business</li>
            <li>When required by law or to protect our rights</li>
            <li>In connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>

          <h2>5. Cookies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p><strong>Email:</strong> privacy&#64;brightbiz.digital<br>
          <strong>Phone:</strong> +1 (234) 567-890</p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {}
