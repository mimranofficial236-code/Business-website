import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Terms of Service</h1>
        <p>Last updated: January 2026</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="legal-content">
          <h2>1. Agreement to Terms</h2>
          <p>By accessing or using BrightBiz Digital's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>

          <h2>2. Services</h2>
          <p>BrightBiz Digital provides web design, development, SEO, and digital marketing services. We reserve the right to modify, suspend, or discontinue any service at any time without notice.</p>

          <h2>3. Client Responsibilities</h2>
          <p>As a client, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information for your project</li>
            <li>Respond to requests for feedback and approvals in a timely manner</li>
            <li>Ensure you have the rights to any content you provide</li>
            <li>Make payments according to the agreed schedule</li>
          </ul>

          <h2>4. Payment Terms</h2>
          <p>Payment terms are as follows:</p>
          <ul>
            <li>A 50% deposit is required before work begins</li>
            <li>The remaining balance is due upon project completion</li>
            <li>Monthly services are billed at the beginning of each month</li>
            <li>Late payments may incur additional fees</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>Upon full payment, you will own the final deliverables. However, we retain the right to:</p>
          <ul>
            <li>Display the work in our portfolio</li>
            <li>Use the work for promotional purposes</li>
            <li>Retain ownership of any pre-existing materials or templates</li>
          </ul>

          <h2>6. Revisions and Changes</h2>
          <p>Our packages include a specified number of revision rounds. Additional revisions beyond the agreed scope will be billed at our hourly rate. Major changes to project scope may require a new quote.</p>

          <h2>7. Limitation of Liability</h2>
          <p>BrightBiz Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service.</p>

          <h2>8. Termination</h2>
          <p>Either party may terminate the agreement with written notice. Upon termination:</p>
          <ul>
            <li>You will pay for all work completed up to the termination date</li>
            <li>We will provide all completed deliverables</li>
            <li>Deposits are non-refundable unless otherwise agreed</li>
          </ul>

          <h2>9. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>

          <h2>10. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p><strong>Email:</strong> legal&#64;brightbiz.digital<br>
          <strong>Phone:</strong> +1 (234) 567-890</p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './terms.component.scss'
})
export class TermsComponent {}
