import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=90" alt="" />
        <div class="hero-overlay"></div>
        <div class="hero-pattern"></div>
      </div>
      
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="badge-dot"></span>
              <span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 6px;"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>
                Available for New Projects
              </span>
            </div>
            
            <h1>We Build <span>Websites</span> That Grow Your Business</h1>
            
            <p>Professional web design, SEO & digital marketing for local businesses. Get more customers online with our proven strategies.</p>
            
            <div class="hero-buttons">
              <a routerLink="/contact" class="btn-primary">
                Get Free Quote
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a routerLink="/portfolio" class="btn-secondary">View Our Work</a>
            </div>
          </div>
          
          <div class="hero-visual">
            <div class="visual-main">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=90" alt="" />
              <div class="visual-glow"></div>
            </div>
            <div class="visual-float vf1">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&q=90" alt="" />
            </div>
            <div class="visual-float vf2">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=280&h=180&fit=crop&q=90" alt="" />
            </div>
            <div class="visual-badge vb1">
              <div class="badge-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <strong>Verified</strong>
                <span>Top Rated Agency</span>
              </div>
            </div>
            <div class="visual-badge vb2">
              <div class="badge-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <div>
                <strong>Fast Delivery</strong>
                <span>2-4 Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="hero-stats">
        <div class="container">
          <div class="stats-row">
            <div class="stat-box">
              <span class="stat-num">500+</span>
              <span class="stat-text">Projects Completed</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-box">
              <span class="stat-num">98%</span>
              <span class="stat-text">Client Satisfaction</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-box">
              <span class="stat-num">5+</span>
              <span class="stat-text">Years Experience</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-box">
              <span class="stat-num">24/7</span>
              <span class="stat-text">Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES SECTION -->
    <section class="services">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Our Services</span>
          <h2>What We <span>Offer</span></h2>
          <p>Complete digital solutions to help your business grow online</p>
        </div>
        
        <div class="services-grid">
          @for (service of services; track service.title; let i = $index) {
            <div class="service-card">
              <div class="card-image">
                <img [src]="service.image" [alt]="service.title" />
                <div class="card-number">0{{ i + 1 }}</div>
              </div>
              <div class="card-content">
                <div class="card-icon">
                  <img [src]="service.icon" [alt]="service.title" />
                </div>
                <h3>{{ service.title }}</h3>
                <p>{{ service.desc }}</p>
                <a routerLink="/services" class="card-link">Learn More →</a>
              </div>
            </div>
          }
        </div>
        
        <div class="section-footer">
          <a routerLink="/services" class="btn-outline">View All Services →</a>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="why-us">
      <div class="why-bg">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=800&fit=crop&q=90" alt="" />
        <div class="why-overlay"></div>
      </div>
      <div class="container">
        <div class="why-grid">
          <div class="why-content">
            <span class="section-badge light">Why Choose Us</span>
            <h2>We're Your <span>Growth Partner</span></h2>
            <p>We don't just build websites. We build businesses. Our team is dedicated to helping you succeed online with proven strategies and exceptional service.</p>
            
            <div class="why-features">
              <div class="feature-item">
                <div class="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <div class="feature-text">
                  <h4>Fast Delivery</h4>
                  <p>Most projects completed in 2-4 weeks</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div class="feature-text">
                  <h4>Affordable Pricing</h4>
                  <p>Premium quality at fair prices</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div class="feature-text">
                  <h4>100% Guarantee</h4>
                  <p>Satisfaction guaranteed or money back</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                </div>
                <div class="feature-text">
                  <h4>24/7 Support</h4>
                  <p>We're always here when you need us</p>
                </div>
              </div>
            </div>
            
            <a routerLink="/about" class="btn-accent">Learn More About Us →</a>
          </div>
          
          <div class="why-images">
            <div class="why-img-main">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=400&fit=crop&q=90" alt="" />
            </div>
            <div class="why-img-small">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop&q=90" alt="" />
            </div>
            <div class="why-stat-badge">
              <span class="badge-num">500+</span>
              <span class="badge-text">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PORTFOLIO SECTION -->
    <section class="portfolio">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Our Work</span>
          <h2>Recent <span>Projects</span></h2>
          <p>See what we've built for our amazing clients</p>
        </div>
        
        <div class="portfolio-grid">
          @for (project of projects; track project.title) {
            <div class="portfolio-card">
              <div class="portfolio-image">
                <img [src]="project.image" [alt]="project.title" />
              </div>
              <div class="portfolio-info">
                <span class="portfolio-cat">{{ project.category }}</span>
                <h3>{{ project.title }}</h3>
                <p>{{ project.desc }}</p>
              </div>
            </div>
          }
        </div>
        
        <div class="section-footer">
          <a routerLink="/portfolio" class="btn-outline">View All Projects →</a>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Testimonials</span>
          <h2>What Clients <span>Say</span></h2>
        </div>
        
        <div class="testimonials-grid">
          @for (t of testimonials; track t.name; let i = $index) {
            <div class="testi-card" [class.featured]="i === 1">
              <div class="testi-quote">"</div>
              <p>{{ t.text }}</p>
              <div class="testi-rating">★★★★★</div>
              <div class="testi-author">
                <img [src]="t.avatar" [alt]="t.name" />
                <div>
                  <strong>{{ t.name }}</strong>
                  <span>{{ t.business }}</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="cta">
      <div class="cta-bg">
        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=600&fit=crop&q=90" alt="" />
        <div class="cta-overlay"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <svg class="cta-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
          </svg>
          <h2>Ready to Grow Your Business?</h2>
          <p>Get a free consultation and custom quote for your project</p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="btn-accent-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book Free Consultation
            </a>
            <a href="tel:+1234567890" class="btn-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Us Now
            </a>
          </div>
          <div class="cta-trust">
            <span>✓ Free Consultation</span>
            <span>✓ No Commitment</span>
            <span>✓ 100% Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services = [
    { icon: 'https://img.icons8.com/fluency/96/web-design.png', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop&q=90', title: 'Web Design', desc: 'Beautiful, responsive websites that convert visitors into customers.' },
    { icon: 'https://img.icons8.com/fluency/96/google-logo.png', image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&h=350&fit=crop&q=90', title: 'Google Business', desc: 'Get found on Google Maps and Search with optimized profiles.' },
    { icon: 'https://img.icons8.com/fluency/96/combo-chart.png', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop&q=90', title: 'SEO & Marketing', desc: 'Rank higher and reach more customers with proven strategies.' },
    { icon: 'https://img.icons8.com/fluency/96/shopping-cart-loaded.png', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=350&fit=crop&q=90', title: 'E-Commerce', desc: 'Online stores that sell 24/7 with secure payment systems.' }
  ];

  features = [
    { icon: 'https://img.icons8.com/fluency/96/rocket.png', title: 'Fast Delivery', desc: 'Most projects completed in 2-4 weeks' },
    { icon: 'https://img.icons8.com/fluency/96/money-bag.png', title: 'Affordable Pricing', desc: 'Premium quality at fair prices' },
    { icon: 'https://img.icons8.com/fluency/96/guarantee.png', title: '100% Guarantee', desc: 'Satisfaction guaranteed or money back' },
    { icon: 'https://img.icons8.com/fluency/96/headset.png', title: '24/7 Support', desc: 'We\'re always here when you need us' }
  ];

  projects = [
    { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop&q=90', title: 'Nexus Analytics', category: 'SaaS Platform', desc: 'Enterprise analytics dashboard' },
    { image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=450&fit=crop&q=90', title: 'LuxeCart Store', category: 'E-Commerce', desc: 'Premium online shopping' },
    { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop&q=90', title: 'TaskMaster Pro', category: 'Web App', desc: 'Project management tool' }
  ];

  testimonials = [
    { name: 'Sarah Mitchell', business: 'Mitchell\'s Bakery', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', text: 'BrightBiz transformed our online presence. We saw a 40% increase in orders within weeks!' },
    { name: 'James Thompson', business: 'Thompson Plumbing', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', text: 'Best investment I\'ve ever made. Now I get most of my leads through Google. Highly recommend!' },
    { name: 'Emily Rodriguez', business: 'Bloom Florist', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', text: 'Professional team, amazing results. My shop now appears at the top of local searches!' }
  ];
}
