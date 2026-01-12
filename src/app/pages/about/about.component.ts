import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>About Us</h1>
        <p>Passionate about helping local businesses succeed online</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <span class="section-badge">Our Story</span>
            <h2>We Help Small Businesses Compete Online</h2>
            <p>BrightBiz Digital was founded with a simple mission: to give local businesses the same powerful online presence that big corporations enjoy, but at a price they can afford.</p>
            <p>We understand that running a small business is challenging. You're juggling a hundred different tasks, and building a website or managing your online presence often falls to the bottom of the list. That's where we come in.</p>
            <p>Our team of experienced designers, developers, and digital marketers work together to create websites that not only look great but actually bring in new customers.</p>
          </div>
          <div class="about-stats">
            <div class="stat-card">
              <span class="stat-number">500+</span>
              <span class="stat-label">Websites Launched</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">98%</span>
              <span class="stat-label">Client Satisfaction</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">5+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">24h</span>
              <span class="stat-label">Support Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-light">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Our Values</span>
          <h2>What We Stand For</h2>
        </div>
        <div class="values-grid">
          @for (value of values; track value.title) {
            <div class="value-card">
              <div class="value-icon">
                <img [src]="value.icon" [alt]="value.title" />
              </div>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cta-box">
          <h2>Let's Work Together</h2>
          <p>Ready to take your business to the next level?</p>
          <a routerLink="/contact" class="btn btn-accent btn-lg">Get In Touch</a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values = [
    {
      icon: 'https://img.icons8.com/fluency/96/guarantee.png',
      title: 'Quality First',
      description: 'We never cut corners. Every website we build is crafted with attention to detail and built to last.'
    },
    {
      icon: 'https://img.icons8.com/fluency/96/speed.png',
      title: 'Fast Delivery',
      description: 'We respect your time. Most projects are completed within 2-4 weeks without compromising quality.'
    },
    {
      icon: 'https://img.icons8.com/fluency/96/cheap-2.png',
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges. You know exactly what you\'re paying for from day one.'
    },
    {
      icon: 'https://img.icons8.com/fluency/96/customer-support.png',
      title: 'Ongoing Support',
      description: 'We\'re here for you long after launch. Get help whenever you need it with our dedicated support.'
    }
  ];
}
