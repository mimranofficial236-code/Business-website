import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=90" alt="" />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="pulse-dot"></span>
              <img src="https://img.icons8.com/fluency/48/star.png" alt="" />
              <span>Trusted by 500+ Businesses</span>
            </div>
            <h1>Helping Local Businesses <span>Get More Customers</span> Online</h1>
            <p>Fast, professional websites + Google setup. Start today and watch your business grow with a stunning online presence.</p>
            <div class="hero-buttons">
              <a routerLink="/contact" class="btn-primary">
                Book Free Consultation
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a routerLink="/portfolio" class="btn-outline">View Our Work</a>
            </div>
            <div class="hero-clients">
              <div class="client-avatars">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop" alt="" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop" alt="" />
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop" alt="" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop" alt="" />
              </div>
              <div class="client-info">
                <span class="stars">★★★★★</span>
                <span class="text">4.9/5 from 200+ reviews</span>
              </div>
            </div>
          </div>
          <div class="hero-images">
            <div class="hero-card main">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop&q=90" alt="Dashboard" />
            </div>
            <div class="hero-card small">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&q=90" alt="Analytics" />
            </div>
            <div class="floating-badge badge-1">
              <img src="https://img.icons8.com/fluency/32/verified-badge.png" alt="" />
              <span>Verified</span>
            </div>
            <div class="floating-badge badge-2">
              <span class="emoji">🚀</span>
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
        
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-num">500+</span>
            <span class="stat-label">Happy Clients</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">98%</span>
            <span class="stat-label">Satisfaction</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">24h</span>
            <span class="stat-label">Fast Support</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">15+</span>
            <span class="stat-label">Years Exp.</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {}
