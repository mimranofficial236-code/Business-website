import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">What We Do</span>
          <h2>Services That <span>Drive Results</span></h2>
          <p>Everything you need to establish a powerful online presence and attract more customers.</p>
        </div>

        <div class="services-grid">
          @for (service of services; track service.title; let i = $index) {
            <div class="service-card">
              <div class="card-image">
                <img [src]="service.image" [alt]="service.title" />
                <span class="card-num">0{{ i + 1 }}</span>
              </div>
              <div class="card-body">
                <div class="card-icon">
                  <img [src]="service.icon" [alt]="service.title" />
                </div>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                <a routerLink="/services" class="card-link">
                  Learn More →
                </a>
              </div>
            </div>
          }
        </div>

        <div class="section-cta">
          <a routerLink="/services" class="btn-primary">View All Services →</a>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./services-preview.component.scss']
})
export class ServicesPreviewComponent {
  services = [
    {
      icon: 'https://img.icons8.com/fluency/64/web-design.png',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&q=90',
      title: 'Website Design',
      description: 'Custom, mobile-responsive websites that look stunning and convert visitors into customers.'
    },
    {
      icon: 'https://img.icons8.com/fluency/64/google-logo.png',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&h=300&fit=crop&q=90',
      title: 'Google Business',
      description: 'Get found on Google Maps and Search. We optimize your profile for maximum visibility.'
    },
    {
      icon: 'https://img.icons8.com/fluency/64/combo-chart.png',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&q=90',
      title: 'SEO & Marketing',
      description: 'Rank higher in search results and reach more customers with proven strategies.'
    }
  ];
}
