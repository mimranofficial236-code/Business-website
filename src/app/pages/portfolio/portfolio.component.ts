import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Our Portfolio</h1>
        <p>Explore our recent work and see what we can do for your business</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="portfolio-grid">
          @for (project of projects; track project.title) {
            <div class="portfolio-card">
              <div class="portfolio-image">
                <img [src]="project.image" [alt]="project.title" />
                <div class="portfolio-overlay"><a href="#" class="btn btn-accent">View Project</a></div>
              </div>
              <div class="portfolio-info">
                <span class="portfolio-category">{{ project.category }}</span>
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section section-light">
      <div class="container">
        <div class="cta-box">
          <h2>Want Results Like These?</h2>
          <p>Let's discuss how we can help your business grow online</p>
          <a routerLink="/contact" class="btn btn-accent btn-lg">Start Your Project</a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    { 
      title: 'Nexus Analytics Platform', 
      category: 'SaaS Dashboard', 
      description: 'Enterprise analytics dashboard with real-time data visualization, custom reports, and team collaboration tools built with Angular & Node.js.', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' 
    },
    { 
      title: 'LuxeCart Online Store', 
      category: 'E-Commerce Platform', 
      description: 'High-performance e-commerce solution with Stripe payments, inventory sync, and AI-powered product recommendations.', 
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop' 
    },
    { 
      title: 'TaskMaster Pro', 
      category: 'Project Management', 
      description: 'Collaborative project management app with Kanban boards, time tracking, Slack integration, and automated workflows.', 
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop' 
    },
    { 
      title: 'CryptoVault Wallet', 
      category: 'FinTech Application', 
      description: 'Secure cryptocurrency wallet with multi-chain support, real-time trading, portfolio analytics, and biometric authentication.', 
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop' 
    },
    { 
      title: 'LearnHub Academy', 
      category: 'EdTech Platform', 
      description: 'Online learning platform with video courses, live classes, progress tracking, certificates, and instructor dashboard.', 
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop' 
    },
    { 
      title: 'StyleBazaar Fashion', 
      category: 'E-Commerce Store', 
      description: 'Modern fashion e-commerce with virtual try-on, size recommendations, wishlist, and multi-currency checkout system.', 
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop' 
    }
  ];
}
