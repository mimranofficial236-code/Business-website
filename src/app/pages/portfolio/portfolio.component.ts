import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- HERO SECTION -->
    <section class="portfolio-hero">
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
            <span class="badge-icon">✦</span>
            <span>Our Work</span>
          </div>
          <h1>Creative <span>Portfolio</span></h1>
          <p>Discover our latest projects and see how we transform ideas into digital experiences that drive results.</p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-num">500+</span>
              <span class="stat-label">Projects Completed</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-num">98%</span>
              <span class="stat-label">Client Satisfaction</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-num">50+</span>
              <span class="stat-label">Industries Served</span>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>Scroll to explore</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- FILTER SECTION -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-wrapper">
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'all'"
            (click)="setFilter('all')">
            All Projects
          </button>
          @for (category of categories; track category) {
            <button 
              class="filter-btn" 
              [class.active]="activeFilter === category"
              (click)="setFilter(category)">
              {{ category }}
            </button>
          }
        </div>
      </div>
    </section>

    <!-- PORTFOLIO GRID -->
    <section class="portfolio-section">
      <div class="container">
        <div class="portfolio-grid">
          @for (project of filteredProjects; track project.title; let i = $index) {
            <div class="portfolio-card" [class.featured]="i === 0">
              <div class="card-image">
                <img [src]="project.image" [alt]="project.title" />
                <div class="card-overlay">
                  <div class="overlay-content">
                    <span class="project-category">{{ project.category }}</span>
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                    <div class="project-tech">
                      @for (tech of project.tech; track tech) {
                        <span class="tech-tag">{{ tech }}</span>
                      }
                    </div>
                    <div class="overlay-actions">
                      <a href="#" class="btn-view">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        View Project
                      </a>
                      <button class="btn-details">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card-badge" *ngIf="project.featured">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  Featured
                </div>
              </div>
              <div class="card-info">
                <div class="info-header">
                  <span class="category-tag">{{ project.category }}</span>
                  <span class="project-year">{{ project.year }}</span>
                </div>
                <h3>{{ project.title }}</h3>
                <p>{{ project.shortDesc }}</p>
                <div class="info-footer">
                  <div class="client-info">
                    <img [src]="project.clientLogo" [alt]="project.client" class="client-logo" />
                    <span>{{ project.client }}</span>
                  </div>
                  <a href="#" class="arrow-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </a>
                </div>
              </div>
            </div>
          }
        </div>

        <div class="load-more">
          <button class="load-more-btn">
            Load More Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- PROCESS SECTION -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Our Process</span>
          <h2>How We <span>Work</span></h2>
          <p>A proven methodology that delivers exceptional results</p>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="step-number">01</div>
            <div class="step-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </div>
            <h3>Discovery</h3>
            <p>We dive deep into your business goals, target audience, and competition.</p>
          </div>
          <div class="process-card">
            <div class="step-number">02</div>
            <div class="step-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            </div>
            <h3>Strategy</h3>
            <p>We create a comprehensive plan tailored to achieve your objectives.</p>
          </div>
          <div class="process-card">
            <div class="step-number">03</div>
            <div class="step-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
            </div>
            <h3>Design</h3>
            <p>Our creative team brings your vision to life with stunning designs.</p>
          </div>
          <div class="process-card">
            <div class="step-number">04</div>
            <div class="step-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
            </div>
            <h3>Launch</h3>
            <p>We deploy your project and ensure everything runs perfectly.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIAL SECTION -->
    <section class="testimonial-section">
      <div class="container">
        <div class="testimonial-content">
          <div class="quote-icon">"</div>
          <blockquote>
            BrightBiz Digital transformed our online presence completely. Their attention to detail and creative approach resulted in a 200% increase in our conversions. Highly recommended!
          </blockquote>
          <div class="testimonial-author">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop" alt="Client" />
            <div>
              <strong>Michael Anderson</strong>
              <span>CEO, TechVentures Inc.</span>
            </div>
          </div>
          <div class="testimonial-rating">
            <span>★★★★★</span>
            <span class="rating-text">5.0 Rating</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="cta-section">
      <div class="cta-bg">
        <div class="cta-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
        </div>
      </div>
      <div class="container">
        <div class="cta-content">
          <div class="cta-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
          </div>
          <h2>Ready to Start Your <span>Project</span>?</h2>
          <p>Let's create something amazing together. Get a free consultation today.</p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="btn-primary">
              Start Your Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="tel:+1234567890" class="btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              Call Us Now
            </a>
          </div>
          <div class="cta-trust">
            <span>✓ Free Consultation</span>
            <span>✓ No Obligation</span>
            <span>✓ Quick Response</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  activeFilter = 'all';
  
  categories = ['Web Design', 'E-Commerce', 'SaaS', 'Mobile App', 'Branding'];

  projects = [
    { 
      title: 'Nexus Analytics Platform', 
      category: 'SaaS', 
      description: 'Enterprise analytics dashboard with real-time data visualization, custom reports, and team collaboration tools.',
      shortDesc: 'Real-time analytics & data visualization platform',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tech: ['Angular', 'Node.js', 'MongoDB', 'D3.js'],
      client: 'TechCorp Inc.',
      clientLogo: 'https://img.icons8.com/color/48/google-logo.png',
      year: '2024',
      featured: true
    },
    { 
      title: 'LuxeCart Fashion Store', 
      category: 'E-Commerce', 
      description: 'High-performance e-commerce with Stripe payments, inventory sync, and AI-powered recommendations.',
      shortDesc: 'Premium fashion e-commerce platform',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      tech: ['React', 'Stripe', 'AWS', 'PostgreSQL'],
      client: 'LuxeCart Ltd.',
      clientLogo: 'https://img.icons8.com/color/48/shopify.png',
      year: '2024',
      featured: false
    },
    { 
      title: 'TaskMaster Pro', 
      category: 'SaaS', 
      description: 'Collaborative project management with Kanban boards, time tracking, and automated workflows.',
      shortDesc: 'Smart project management solution',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
      tech: ['Vue.js', 'Firebase', 'Slack API'],
      client: 'ProductiveTeam',
      clientLogo: 'https://img.icons8.com/color/48/slack-new.png',
      year: '2023',
      featured: false
    },
    { 
      title: 'CryptoVault Wallet', 
      category: 'Mobile App', 
      description: 'Secure cryptocurrency wallet with multi-chain support and biometric authentication.',
      shortDesc: 'Secure multi-chain crypto wallet',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      tech: ['React Native', 'Web3.js', 'Solidity'],
      client: 'CryptoVault',
      clientLogo: 'https://img.icons8.com/color/48/bitcoin.png',
      year: '2023',
      featured: true
    },
    { 
      title: 'Artisan Coffee Brand', 
      category: 'Branding', 
      description: 'Complete brand identity including logo, packaging, and digital presence for premium coffee brand.',
      shortDesc: 'Premium coffee brand identity',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
      tech: ['Figma', 'Illustrator', 'Photoshop'],
      client: 'Artisan Coffee Co.',
      clientLogo: 'https://img.icons8.com/color/48/starbucks.png',
      year: '2024',
      featured: false
    },
    { 
      title: 'HealthHub Clinic', 
      category: 'Web Design', 
      description: 'Modern healthcare website with appointment booking, patient portal, and telemedicine integration.',
      shortDesc: 'Healthcare platform with telemedicine',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tech: ['Next.js', 'Tailwind', 'Stripe'],
      client: 'HealthHub',
      clientLogo: 'https://img.icons8.com/color/48/heart-health.png',
      year: '2023',
      featured: false
    }
  ];

  get filteredProjects() {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}
