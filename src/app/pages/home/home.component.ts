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
              <span>🚀 Available for New Projects</span>
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
            
            <div class="hero-trust">
              <div class="trust-avatars">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop" alt="" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop" alt="" />
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop" alt="" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop" alt="" />
                <span class="trust-more">+500</span>
              </div>
              <div class="trust-info">
                <div class="trust-stars">★★★★★</div>
                <span>Trusted by 500+ businesses</span>
              </div>
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
              <img src="https://img.icons8.com/fluency/96/verified-account.png" alt="" />
              <div>
                <strong>Verified</strong>
                <span>Top Rated Agency</span>
              </div>
            </div>
            <div class="visual-badge vb2">
              <div class="badge-emoji">⚡</div>
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
              @for (feature of features; track feature.title) {
                <div class="feature-item">
                  <div class="feature-icon">
                    <img [src]="feature.icon" [alt]="feature.title" />
                  </div>
                  <div class="feature-text">
                    <h4>{{ feature.title }}</h4>
                    <p>{{ feature.desc }}</p>
                  </div>
                </div>
              }
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
          <img src="https://img.icons8.com/fluency/96/rocket.png" alt="" class="cta-icon" />
          <h2>Ready to Grow Your Business?</h2>
          <p>Get a free consultation and custom quote for your project</p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="btn-accent-lg">
              📅 Book Free Consultation
            </a>
            <a href="tel:+1234567890" class="btn-white">
              📞 Call Us Now
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
