import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- HERO - Centered Minimal Design (Different from Home) -->
    <section class="services-hero">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="hero-center">
          <div class="hero-breadcrumb">
            <a routerLink="/">Home</a>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            <span>Services</span>
          </div>
          
          <h1>Our Services</h1>
          <p>Everything you need to grow your business online. Professional solutions at affordable prices.</p>
          
          <div class="hero-icons">
            <div class="hero-icon-item">
              <div class="icon-circle">
                <img src="https://img.icons8.com/fluency/96/web-design.png" alt="" />
              </div>
              <span>Web Design</span>
            </div>
            <div class="hero-icon-item">
              <div class="icon-circle">
                <img src="https://img.icons8.com/fluency/96/google-logo.png" alt="" />
              </div>
              <span>Google SEO</span>
            </div>
            <div class="hero-icon-item">
              <div class="icon-circle">
                <img src="https://img.icons8.com/fluency/96/shopping-cart-loaded.png" alt="" />
              </div>
              <span>E-Commerce</span>
            </div>
            <div class="hero-icon-item">
              <div class="icon-circle">
                <img src="https://img.icons8.com/fluency/96/combo-chart.png" alt="" />
              </div>
              <span>Marketing</span>
            </div>
          </div>
          
          <div class="hero-cta">
            <a routerLink="/contact" class="btn-cta">Get Free Quote →</a>
          </div>
        </div>
      </div>
      <div class="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>

    <!-- SERVICES LIST - Alternating Layout -->
    <section class="services-list">
      <div class="container">
        @for (service of services; track service.title; let i = $index; let odd = $odd) {
          <div class="service-row" [class.reverse]="odd">
            <div class="service-image">
              <img [src]="service.image" [alt]="service.title" />
              <div class="image-badge">
                <span class="badge-price">{{ service.price }}</span>
              </div>
            </div>
            <div class="service-content">
              <div class="service-number">0{{ i + 1 }}</div>
              <div class="service-icon">
                <img [src]="service.icon" [alt]="service.title" />
              </div>
              <h2>{{ service.title }}</h2>
              <p class="service-desc">{{ service.desc }}</p>
              <ul class="service-features">
                @for (feature of service.features; track feature) {
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                    {{ feature }}
                  </li>
                }
              </ul>
              <a routerLink="/contact" class="service-btn">Get Started →</a>
            </div>
          </div>
        }
      </div>
    </section>

    <!-- PROCESS - Timeline Style with Scroll Animation -->
    <section class="process-section">
      <div class="container">
        <div class="process-header">
          <span class="process-tag">How It Works</span>
          <h2>Our Simple Process</h2>
          <p>From idea to launch in 4 easy steps</p>
        </div>
        
        <div class="process-timeline">
          @for (step of process; track step.title; let i = $index; let last = $last) {
            <div class="timeline-item" #timelineItem [class.visible]="visibleItems[i]">
              <div class="timeline-marker">
                <span class="marker-num">{{ i + 1 }}</span>
                @if (!last) {
                  <div class="marker-line"></div>
                }
              </div>
              <div class="timeline-content">
                <div class="timeline-icon">
                  <img [src]="step.icon" [alt]="step.title" />
                </div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.desc }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- PRICING COMPARISON -->
    <section class="pricing-section">
      <div class="container">
        <div class="pricing-header">
          <span class="pricing-tag">Pricing</span>
          <h2>Simple, Transparent Pricing</h2>
          <p>No hidden fees. No surprises. Just great value.</p>
        </div>
        
        <div class="pricing-grid">
          @for (plan of pricing; track plan.name; let i = $index) {
            <div class="pricing-card" [class.popular]="i === 1">
              @if (i === 1) {
                <div class="popular-badge">Most Popular</div>
              }
              <div class="pricing-top">
                <h3>{{ plan.name }}</h3>
                <p>{{ plan.desc }}</p>
                <div class="pricing-amount">
                  <span class="currency">£</span>
                  <span class="price">{{ plan.price }}</span>
                  @if (plan.period) {
                    <span class="period">/{{ plan.period }}</span>
                  }
                </div>
              </div>
              <ul class="pricing-features">
                @for (feature of plan.features; track feature) {
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                    {{ feature }}
                  </li>
                }
              </ul>
              <a routerLink="/contact" class="pricing-btn" [class.primary]="i === 1">
                {{ i === 1 ? 'Get Started' : 'Contact Us' }}
              </a>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- TECH STACK - Marquee Slider -->
    <section class="tech-section">
      <div class="container">
        <div class="tech-header">
          <h2>Technologies We Use</h2>
          <p>Modern tools for modern solutions</p>
        </div>
      </div>
      <div class="tech-marquee">
        <div class="marquee-track">
          @for (tech of technologies; track tech.name) {
            <div class="tech-item">
              <img [src]="tech.icon" [alt]="tech.name" />
              <span>{{ tech.name }}</span>
            </div>
          }
          @for (tech of technologies; track tech.name + '-dup') {
            <div class="tech-item">
              <img [src]="tech.icon" [alt]="tech.name" />
              <span>{{ tech.name }}</span>
            </div>
          }
        </div>
      </div>
      <div class="tech-marquee reverse">
        <div class="marquee-track">
          @for (tech of technologies; track tech.name + '-rev') {
            <div class="tech-item">
              <img [src]="tech.icon" [alt]="tech.name" />
              <span>{{ tech.name }}</span>
            </div>
          }
          @for (tech of technologies; track tech.name + '-rev-dup') {
            <div class="tech-item">
              <img [src]="tech.icon" [alt]="tech.name" />
              <span>{{ tech.name }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="faq-section">
      <div class="container">
        <div class="faq-header">
          <span class="faq-tag">FAQ</span>
          <h2>Common Questions</h2>
        </div>
        <div class="faq-grid">
          @for (faq of faqs; track faq.q) {
            <div class="faq-item">
              <h3>{{ faq.q }}</h3>
              <p>{{ faq.a }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <section class="cta-banner">
      <div class="container">
        <div class="banner-content">
          <h2>Ready to get started?</h2>
          <p>Book a free consultation and let's discuss your project</p>
          <a routerLink="/contact" class="banner-btn">Book Free Call →</a>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {
  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef>;
  
  visibleItems: boolean[] = [false, false, false, false];
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = this.timelineItems.toArray().findIndex(
              (item) => item.nativeElement === entry.target
            );
            if (index !== -1 && !this.visibleItems[index]) {
              // Add delay based on index for staggered effect
              setTimeout(() => {
                this.visibleItems[index] = true;
              }, index * 300);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe each timeline item
    setTimeout(() => {
      this.timelineItems.forEach((item) => {
        this.observer.observe(item.nativeElement);
      });
    }, 100);
  }

  services = [
    {
      icon: 'https://img.icons8.com/fluency/96/web-design.png',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=90',
      title: 'Website Design & Development',
      desc: 'Custom, mobile-responsive websites built to convert visitors into customers. We create stunning designs that reflect your brand and drive results.',
      features: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Loading', 'CMS Integration', 'Analytics Setup'],
      price: 'From £499'
    },
    {
      icon: 'https://img.icons8.com/fluency/96/google-logo.png',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop&q=90',
      title: 'Google Business Setup',
      desc: 'Get found on Google Maps and Search. We optimize your Google Business Profile to attract local customers and increase visibility.',
      features: ['Profile Optimization', 'Review Management', 'Local SEO', 'Google Maps Listing', 'Insights & Analytics', 'Monthly Reports'],
      price: 'From £199'
    },
    {
      icon: 'https://img.icons8.com/fluency/96/combo-chart.png',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90',
      title: 'SEO & Digital Marketing',
      desc: 'Rank higher in search results and reach more customers. Our proven strategies help you dominate your market online.',
      features: ['Keyword Research', 'On-Page SEO', 'Content Strategy', 'Link Building', 'Performance Tracking', 'Competitor Analysis'],
      price: 'From £299/mo'
    },
    {
      icon: 'https://img.icons8.com/fluency/96/shopping-cart-loaded.png',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=90',
      title: 'E-Commerce Solutions',
      desc: 'Online stores that sell 24/7. We build powerful e-commerce platforms with secure payments and easy management.',
      features: ['Product Management', 'Secure Checkout', 'Payment Integration', 'Inventory System', 'Order Management', 'Customer Accounts'],
      price: 'From £799'
    }
  ];

  process = [
    { icon: 'https://img.icons8.com/fluency/96/phone-message.png', title: 'Discovery Call', desc: 'We learn about your business, goals, and requirements in a free consultation.' },
    { icon: 'https://img.icons8.com/fluency/96/design.png', title: 'Strategy & Design', desc: 'We create a custom strategy and design mockups for your approval.' },
    { icon: 'https://img.icons8.com/fluency/96/source-code.png', title: 'Development', desc: 'Our team builds your solution with regular updates and feedback.' },
    { icon: 'https://img.icons8.com/fluency/96/rocket.png', title: 'Launch & Support', desc: 'We launch your project and provide ongoing support and maintenance.' }
  ];

  pricing = [
    {
      name: 'Starter',
      desc: 'Perfect for small businesses',
      price: '499',
      period: null,
      features: ['5-Page Website', 'Mobile Responsive', 'Contact Form', 'Basic SEO', '1 Month Support']
    },
    {
      name: 'Professional',
      desc: 'Most popular choice',
      price: '999',
      period: null,
      features: ['10-Page Website', 'Custom Design', 'CMS Integration', 'Advanced SEO', 'Google Analytics', '3 Months Support']
    },
    {
      name: 'Enterprise',
      desc: 'For growing businesses',
      price: '299',
      period: 'mo',
      features: ['Unlimited Pages', 'E-Commerce Ready', 'Priority Support', 'Monthly SEO', 'Performance Reports', 'Dedicated Manager']
    }
  ];

  technologies = [
    { name: 'Angular', icon: 'https://img.icons8.com/color/96/angularjs.png' },
    { name: 'React', icon: 'https://img.icons8.com/color/96/react-native.png' },
    { name: 'Vue.js', icon: 'https://img.icons8.com/color/96/vue-js.png' },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/96/nodejs.png' },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/96/typescript.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/96/javascript.png' },
    { name: 'WordPress', icon: 'https://img.icons8.com/color/96/wordpress.png' },
    { name: 'Shopify', icon: 'https://img.icons8.com/color/96/shopify.png' },
    { name: 'Laravel', icon: 'https://img.icons8.com/fluency/96/laravel.png' },
    { name: 'PHP', icon: 'https://img.icons8.com/officel/96/php-logo.png' },
    { name: 'Python', icon: 'https://img.icons8.com/color/96/python.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/96/mongodb.png' },
    { name: 'MySQL', icon: 'https://img.icons8.com/color/96/mysql-logo.png' },
    { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/96/postgreesql.png' },
    { name: 'AWS', icon: 'https://img.icons8.com/color/96/amazon-web-services.png' },
    { name: 'Firebase', icon: 'https://img.icons8.com/color/96/firebase.png' },
    { name: 'Docker', icon: 'https://img.icons8.com/color/96/docker.png' },
    { name: 'Git', icon: 'https://img.icons8.com/color/96/git.png' },
    { name: 'Figma', icon: 'https://img.icons8.com/color/96/figma.png' },
    { name: 'Tailwind', icon: 'https://img.icons8.com/color/96/tailwindcss.png' }
  ];

  faqs = [
    { q: 'How long does a website take?', a: 'Most websites are completed within 2-4 weeks, depending on complexity and requirements.' },
    { q: 'Do you offer payment plans?', a: 'Yes! We offer flexible payment options including 50% upfront and 50% on completion.' },
    { q: 'What if I\'m not satisfied?', a: 'We offer unlimited revisions until you\'re happy. Plus a 100% satisfaction guarantee.' },
    { q: 'Do you provide hosting?', a: 'Yes, we can set up and manage hosting for you, or work with your existing provider.' },
    { q: 'Can I update the website myself?', a: 'Absolutely! We build with easy-to-use CMS systems and provide training.' },
    { q: 'What about ongoing support?', a: 'All packages include support. We also offer monthly maintenance plans.' }
  ];
}
