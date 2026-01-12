import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="portfolio-section">
      <div class="portfolio-bg">
        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&h=800&fit=crop&q=90" alt="" />
        <div class="portfolio-overlay"></div>
      </div>
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Our Work</span>
          <h2>Recent <span>Projects</span></h2>
          <p>See how we've helped businesses establish a powerful online presence.</p>
        </div>

        <div class="portfolio-grid">
          @for (project of projects; track project.title) {
            <div class="portfolio-card">
              <img [src]="project.image" [alt]="project.title" />
              <div class="portfolio-info">
                <span class="category">{{ project.category }}</span>
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
              </div>
            </div>
          }
        </div>

        <div class="section-cta">
          <a routerLink="/portfolio" class="btn-primary">View All Projects →</a>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./portfolio-preview.component.scss']
})
export class PortfolioPreviewComponent {
  projects = [
    {
      title: 'Nexus Analytics',
      category: 'SaaS Platform',
      description: 'Enterprise analytics dashboard with real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=90'
    },
    {
      title: 'LuxeCart Store',
      category: 'E-Commerce',
      description: 'High-performance online store with Stripe payments.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=90'
    },
    {
      title: 'TaskMaster Pro',
      category: 'Web App',
      description: 'Collaborative project management with Kanban boards.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=90'
    }
  ];
}
