import { Component, AfterViewInit, OnDestroy, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- HERO SECTION -->
    <section class="about-hero">
      <div class="hero-bg">
        <div class="hero-overlay"></div>
        <div class="hero-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-breadcrumb">
            <a routerLink="/">Home</a>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            <span>About Us</span>
          </div>
          <h1>We're <span>BrightBiz</span> Digital</h1>
          <p>A passionate team of designers, developers & digital marketers helping local businesses shine online since 2019.</p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-num">500+</span>
              <span class="stat-text">Projects Delivered</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">98%</span>
              <span class="stat-text">Happy Clients</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">5+</span>
              <span class="stat-text">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-scroll">
        <span>Scroll Down</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- OUR STORY SECTION -->
    <section class="story-section">
      <div class="container">
        <div class="story-grid">
          <div class="story-images">
            <div class="img-badge">
              <span class="badge-year">Since</span>
              <span class="badge-num">2019</span>
            </div>
            <div class="img-main">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop&q=90" alt="Our Team" />
            </div>
            <div class="img-secondary">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&q=90" alt="Working" />
            </div>
            <div class="img-accent">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop&q=90" alt="Meeting" />
            </div>
          </div>
          <div class="story-content">
            <span class="section-tag">Our Story</span>
            <h2>From Small Beginnings to <span>Big Dreams</span></h2>
            <p class="lead">BrightBiz Digital started in a small home office with just one laptop and a big vision: to help local businesses compete in the digital world.</p>
            <p>We noticed that small business owners were struggling to establish their online presence. Big agencies charged too much, and DIY solutions looked unprofessional.</p>
            <p>So we created BrightBiz Digital – a company that combines enterprise-level quality with small-business-friendly pricing. Today, we've helped over 500 businesses transform their online presence.</p>
            <div class="story-features">
              <div class="feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Affordable pricing for every budget</span>
              </div>
              <div class="feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Personal attention to every project</span>
              </div>
              <div class="feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Results that speak for themselves</span>
              </div>
            </div>
            <a routerLink="/contact" class="story-btn">
              Let's Talk
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CEO SPOTLIGHT -->
    <section class="ceo-section">
      <div class="ceo-bg">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1000&fit=crop&q=90" alt="" />
        <div class="ceo-overlay"></div>
        <div class="ceo-pattern"></div>
      </div>
      <div class="container">
        <div class="section-intro">
          <span class="intro-tag">Leadership</span>
          <h2>Meet The <span>Visionary</span></h2>
        </div>
        <div class="ceo-showcase">
          <div class="ceo-image-wrapper">
            <div class="image-glow"></div>
            <div class="image-container">
              <img src="assets/images/ceo.jpeg" alt="Muhammad Imran - CEO" />
              <div class="image-border"></div>
            </div>
            <div class="floating-elements">
              <div class="float-badge badge-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#F4D35E"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                <span>Top Rated CEO</span>
              </div>
              <div class="float-badge badge-2">
                <span class="badge-num">10+</span>
                <span class="badge-text">Years</span>
              </div>
            </div>
          </div>
          <div class="ceo-info">
            <div class="info-header">
              <div class="name-title">
                <h3>Muhammad <span>Imran</span></h3>
                <div class="title-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span>Founder & Chief Executive Officer</span>
                </div>
              </div>
            </div>
            <div class="quote-section">
              <div class="quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#F4D35E"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>
              <p>"I started BrightBiz Digital with a simple belief: every business, no matter how small, deserves a powerful online presence. Today, seeing our clients succeed is what drives me every single day."</p>
            </div>
            <div class="achievement-grid">
              <div class="achievement">
                <div class="ach-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div class="ach-info">
                  <strong>500+</strong>
                  <span>Projects Delivered</span>
                </div>
              </div>
              <div class="achievement">
                <div class="ach-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div class="ach-info">
                  <strong>50+</strong>
                  <span>Team Members</span>
                </div>
              </div>
              <div class="achievement">
                <div class="ach-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
                </div>
                <div class="ach-info">
                  <strong>15+</strong>
                  <span>Awards Won</span>
                </div>
              </div>
            </div>
            <div class="ceo-footer">
              <div class="social-connect">
                <span>Connect:</span>
                <a href="#" class="social-btn" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" class="social-btn" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" class="social-btn" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
              <a routerLink="/contact" class="meet-btn">
                Schedule a Meeting
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- JOURNEY TIMELINE -->
    <section class="journey-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Our Journey</span>
          <h2>How We <span>Grew</span></h2>
          <p>Key milestones in our journey to becoming a leading digital agency</p>
        </div>
        <div class="timeline">
          @for (milestone of milestones; track milestone.year; let i = $index) {
            <div class="timeline-item" [class.reverse]="i % 2 !== 0" [class.visible]="visibleItems[i]" #timelineItem>
              <div class="timeline-content">
                <span class="timeline-year">{{ milestone.year }}</span>
                <h3>{{ milestone.title }}</h3>
                <p>{{ milestone.desc }}</p>
              </div>
              <div class="timeline-marker">
                <div class="marker-dot"></div>
              </div>
              <div class="timeline-spacer"></div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- MISSION & VISION -->
    <section class="mission-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Our Purpose</span>
          <h2>Mission, Vision & <span>Promise</span></h2>
        </div>
        <div class="mission-grid">
          <div class="mission-card">
            <div class="card-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="#F4D35E"/></svg>
            </div>
            <h3>Our Mission</h3>
            <p>To empower local businesses with professional, affordable digital solutions that drive real growth.</p>
          </div>
          <div class="mission-card featured">
            <div class="card-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3" fill="#F4D35E"/></svg>
            </div>
            <h3>Our Vision</h3>
            <p>To become the most trusted digital partner for small businesses worldwide.</p>
          </div>
          <div class="mission-card">
            <div class="card-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="#F4D35E" stroke="#F4D35E" stroke-width="1"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
            </div>
            <h3>Our Promise</h3>
            <p>We promise to treat your business like our own, delivering solutions that exceed expectations.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUES SECTION -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Our Values</span>
          <h2>What Drives Us <span>Every Day</span></h2>
          <p>These core values guide everything we do</p>
        </div>
        <div class="values-grid">
          <div class="value-card">
            <div class="card-bg">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=90" alt="" />
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <div class="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <span class="card-num">01</span>
              <h3>Quality First</h3>
              <p>We never compromise on quality. Every project receives our full attention.</p>
            </div>
          </div>
          <div class="value-card featured">
            <div class="card-bg">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=90" alt="" />
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <div class="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <span class="card-num">02</span>
              <h3>Client Partnership</h3>
              <p>We treat every client as a partner, working together towards success.</p>
            </div>
          </div>
          <div class="value-card">
            <div class="card-bg">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=90" alt="" />
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <div class="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              </div>
              <span class="card-num">03</span>
              <h3>Innovation</h3>
              <p>We stay ahead of trends to bring you the latest solutions.</p>
            </div>
          </div>
          <div class="value-card">
            <div class="card-bg">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&q=90" alt="" />
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <div class="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              </div>
              <span class="card-num">04</span>
              <h3>Transparency</h3>
              <p>No hidden fees, no surprises. Complete honesty always.</p>
            </div>
          </div>
          <div class="value-card featured">
            <div class="card-bg">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=90" alt="" />
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <div class="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <span class="card-num">05</span>
              <h3>Fast Delivery</h3>
              <p>We deliver projects on schedule without compromising quality.</p>
            </div>
          </div>
          <div class="value-card">
            <div class="card-bg">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&q=90" alt="" />
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <div class="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              </div>
              <span class="card-num">06</span>
              <h3>24/7 Support</h3>
              <p>Our team is always available to help you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TEAM SECTION -->
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Our Team</span>
          <h2>Meet the <span>Experts</span></h2>
          <p>Talented professionals dedicated to your success</p>
        </div>
        <div class="team-grid">
          @for (member of team; track member.name) {
            <div class="team-card">
              <div class="card-image">
                <img [src]="member.image" [alt]="member.name" />
                <div class="card-overlay">
                  <div class="social-links">
                    <a href="#" class="social-link" aria-label="LinkedIn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="#" class="social-link" aria-label="Twitter">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-info">
                <h4>{{ member.name }}</h4>
                <span>{{ member.role }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Testimonials</span>
          <h2>What Our <span>Clients Say</span></h2>
        </div>
        <div class="testimonials-grid">
          @for (testimonial of testimonials; track testimonial.name; let i = $index) {
            <div class="testimonial-card" [class.featured]="i === 1">
              <div class="quote-icon">"</div>
              <p>{{ testimonial.text }}</p>
              <div class="rating">★★★★★</div>
              <div class="author">
                <img [src]="testimonial.image" [alt]="testimonial.name" />
                <div>
                  <strong>{{ testimonial.name }}</strong>
                  <span>{{ testimonial.company }}</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="why-section">
      <div class="why-bg">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop&q=90" alt="" />
        <div class="why-overlay"></div>
      </div>
      <div class="container">
        <div class="why-grid">
          <div class="why-content">
            <span class="section-tag light">Why Choose Us</span>
            <h2>What Makes Us <span>Different</span></h2>
            <p>We're not just another web agency. We're your growth partners.</p>
            <div class="why-list">
              @for (item of whyUs; track item.title) {
                <div class="why-item">
                  <div class="item-icon" [innerHTML]="getWhyIcon(item.icon)"></div>
                  <div class="item-content">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.desc }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
          <div class="why-stats">
            <div class="stats-card">
              <div class="stats-grid">
                @for (stat of stats; track stat.label) {
                  <div class="stat-item">
                    <span class="stat-number">{{ stat.value }}</span>
                    <span class="stat-label">{{ stat.label }}</span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AWARDS -->
    <section class="awards-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Recognition</span>
          <h2>Awards & <span>Achievements</span></h2>
        </div>
        <div class="awards-grid">
          @for (award of awards; track award.title) {
            <div class="award-card">
              <div class="award-icon" [innerHTML]="getAwardIcon(award.icon)"></div>
              <h4>{{ award.title }}</h4>
              <span>{{ award.year }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CLIENTS -->
    <section class="clients-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Our Clients</span>
          <h2>Trusted by <span>500+</span> Businesses</h2>
        </div>
        <div class="clients-marquee">
          <div class="marquee-track">
            @for (client of clients; track client) {
              <div class="client-logo" [innerHTML]="getClientIcon(client)"></div>
            }
            @for (client of clients; track client + '-dup') {
              <div class="client-logo" [innerHTML]="getClientIcon(client)"></div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <div class="cta-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
          </div>
          <h2>Ready to Start Your <span>Digital Journey</span>?</h2>
          <p>Let's discuss how we can help your business grow online</p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="btn-primary">
              Get Free Consultation
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a routerLink="/portfolio" class="btn-secondary">View Our Work</a>
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
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  constructor(private sanitizer: DomSanitizer) {}

  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef>;

  visibleItems: boolean[] = [false, false, false, false, false, false];
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit() {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      this.setupScrollAnimation();
    }, 100);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupScrollAnimation() {
    if (!this.timelineItems || this.timelineItems.length === 0) return;
    
    const items = this.timelineItems.toArray();
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = items.findIndex(item => item.nativeElement === entry.target);
          if (index !== -1 && !this.visibleItems[index]) {
            // Staggered delay - each card animates 100ms after the previous (faster)
            setTimeout(() => {
              this.visibleItems[index] = true;
              (entry.target as HTMLElement).classList.add('visible');
            }, index * 100);
          }
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    items.forEach((item) => {
      this.observer?.observe(item.nativeElement);
    });
  }

  values = [
    { icon: 'quality', title: 'Quality First', desc: 'We never compromise on quality. Every project receives our full attention.' },
    { icon: 'handshake', title: 'Client Partnership', desc: 'We treat every client as a partner, working together towards success.' },
    { icon: 'innovation', title: 'Innovation', desc: 'We stay ahead of trends to bring you the latest solutions.' },
    { icon: 'transparency', title: 'Transparency', desc: 'No hidden fees, no surprises. Complete honesty always.' },
    { icon: 'speed', title: 'Fast Delivery', desc: 'We deliver projects on schedule without compromising quality.' },
    { icon: 'support', title: '24/7 Support', desc: 'Our team is always available to help you.' }
  ];

  team = [
    { name: 'Ahmed Hassan', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=90' },
    { name: 'Fatima Khan', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&q=90' },
    { name: 'Bilal Ahmed', role: 'Marketing Head', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=90' },
    { name: 'Ayesha Malik', role: 'UI/UX Designer', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=90' }
  ];

  milestones = [
    { year: '2019', title: 'The Beginning', desc: 'Started BrightBiz Digital from a small home office with a big vision.' },
    { year: '2020', title: 'First 100 Clients', desc: 'Reached our first major milestone of 100 happy clients.' },
    { year: '2021', title: 'Team Expansion', desc: 'Grew our team to 20+ professionals and moved to our first office.' },
    { year: '2022', title: 'Google Partnership', desc: 'Became an official Google Partner.' },
    { year: '2023', title: '500+ Projects', desc: 'Celebrated completing over 500 successful projects.' },
    { year: '2024', title: 'Award Winning', desc: 'Recognized as Best Web Agency with multiple awards.' }
  ];

  testimonials = [
    { name: 'Sarah Mitchell', company: 'Mitchell\'s Bakery', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', text: 'BrightBiz transformed our online presence. We saw a 40% increase in orders!' },
    { name: 'James Thompson', company: 'Thompson Plumbing', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', text: 'Best investment for my business. Professional team, amazing results!' },
    { name: 'Emily Rodriguez', company: 'Bloom Florist', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', text: 'The team truly cares. My shop now appears at the top of local searches!' }
  ];

  whyUs = [
    { icon: 'money', title: 'Affordable Pricing', desc: 'Premium quality at prices that fit your budget' },
    { icon: 'rocket', title: 'Fast Turnaround', desc: 'Most projects delivered in 2-4 weeks' },
    { icon: 'medal', title: 'Proven Results', desc: '98% client satisfaction rate' },
    { icon: 'headset', title: 'Dedicated Support', desc: 'Always here when you need us' }
  ];

  stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Team Members' },
    { value: '15+', label: 'Countries Served' }
  ];

  awards = [
    { icon: 'trophy', title: 'Best Web Agency', year: '2024' },
    { icon: 'medal', title: 'Design Excellence', year: '2023' },
    { icon: 'star', title: 'Top Rated Agency', year: '2023' },
    { icon: 'certificate', title: 'Google Partner', year: '2022' }
  ];

  clients = [
    'google', 'microsoft', 'amazon', 'shopify', 'wordpress', 'slack', 'stripe', 'paypal'
  ];

  getValueIcon(icon: string): SafeHtml {
    const icons: {[key: string]: string} = {
      'quality': '<svg viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
      'handshake': '<svg viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>',
      'innovation': '<svg viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
      'transparency': '<svg viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
      'speed': '<svg viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
      'support': '<svg viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>'
    };
    return this.sanitizer.bypassSecurityTrustHtml(icons[icon] || '');
  }

  getWhyIcon(icon: string): SafeHtml {
    const icons: {[key: string]: string} = {
      'money': '<svg viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
      'rocket': '<svg viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
      'medal': '<svg viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>',
      'headset': '<svg viewBox="0 0 24 24" fill="none" stroke="#F4D35E" stroke-width="2"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>'
    };
    return this.sanitizer.bypassSecurityTrustHtml(icons[icon] || '');
  }

  getAwardIcon(icon: string): SafeHtml {
    const icons: {[key: string]: string} = {
      'trophy': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0012 0V2z"/></svg>',
      'medal': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>',
      'star': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
      'certificate': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v6"/><path d="M8 22h8"/><circle cx="12" cy="10" r="2"/></svg>'
    };
    return this.sanitizer.bypassSecurityTrustHtml(icons[icon] || '');
  }

  getClientIcon(client: string): SafeHtml {
    const icons: {[key: string]: string} = {
      'google': '<svg viewBox="0 0 24 24" fill="#4285F4"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>',
      'microsoft': '<svg viewBox="0 0 24 24"><rect x="1" y="1" width="10" height="10" fill="#F25022"/><rect x="13" y="1" width="10" height="10" fill="#7FBA00"/><rect x="1" y="13" width="10" height="10" fill="#00A4EF"/><rect x="13" y="13" width="10" height="10" fill="#FFB900"/></svg>',
      'amazon': '<svg viewBox="0 0 24 24" fill="#FF9900"><path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.493.13.12.205.07.37-.148.506-.096.063-.236.14-.418.235-.195.1-.39.195-.585.285-.66.3-1.37.57-2.13.81a22.17 22.17 0 01-3.3.705c-.497.063-.996.108-1.495.135-.498.027-.996.04-1.493.04-1.793 0-3.57-.18-5.332-.54a22.903 22.903 0 01-5.036-1.665 24.672 24.672 0 01-1.67-.9c-.09-.06-.18-.12-.27-.18-.09-.06-.15-.12-.18-.18-.03-.06-.03-.12 0-.18z"/><path d="M6.29 15.99c-.06.09-.03.18.09.27.12.09.24.15.36.18.12.03.24.03.36 0 .12-.03.21-.09.27-.18l.09-.18c.06-.12.15-.21.27-.27.12-.06.24-.06.36 0 .12.06.21.15.27.27l.09.18c.06.09.15.15.27.18.12.03.24.03.36 0 .12-.03.24-.09.36-.18.12-.09.15-.18.09-.27l-.18-.36c-.12-.24-.3-.42-.54-.54-.24-.12-.48-.12-.72 0-.24.12-.42.3-.54.54l-.18.36z"/></svg>',
      'shopify': '<svg viewBox="0 0 24 24" fill="#96BF48"><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zm-1.278-17.58c0-.076-.019-.152-.019-.228 0-.686-.095-1.238-.247-1.676l-1.715.532c.171.456.266 1.009.266 1.695 0 .076 0 .152-.019.228l1.734-.551zm-2.489-2.242c-.19-.57-.494-1.066-.893-1.485-.893.285-1.734.551-2.489.798.38.608.665 1.39.798 2.394l2.584-.817v-.89zm-3.42 1.085c-.133-.969-.418-1.751-.798-2.356-.893.285-1.734.551-2.489.798.38.608.665 1.39.798 2.394l2.489-.836z"/></svg>',
      'wordpress': '<svg viewBox="0 0 24 24" fill="#21759B"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 19c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9z"/><path d="M3.5 12c0 3.474 2.014 6.478 4.942 7.914L4.392 9.174A8.454 8.454 0 003.5 12zm14.608-1.5c0-1.086-.39-1.838-.725-2.422-.446-.725-.864-1.338-.864-2.063 0-.809.613-1.562 1.478-1.562.039 0 .076.005.114.007A8.457 8.457 0 0012 3.5c-3.015 0-5.668 1.548-7.211 3.892.203.006.394.01.559.01.908 0 2.315-.11 2.315-.11.468-.028.523.66.055.715 0 0-.47.055-1.004.083l3.189 9.489 1.917-5.748-1.364-3.741c-.468-.028-.912-.083-.912-.083-.468-.028-.413-.743.055-.715 0 0 1.435.11 2.287.11.908 0 2.315-.11 2.315-.11.468-.028.523.66.055.715 0 0-.47.055-1.004.083l3.165 9.413.874-2.919c.378-1.211.667-2.08.667-2.829z"/></svg>',
      'slack': '<svg viewBox="0 0 24 24"><path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313z"/><path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312z"/><path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 01-2.522 2.521 2.528 2.528 0 01-2.522-2.521V2.522A2.528 2.528 0 0115.164 0a2.528 2.528 0 012.522 2.522v6.312z"/><path fill="#ECB22E" d="M15.164 18.956a2.528 2.528 0 012.522 2.522A2.528 2.528 0 0115.164 24a2.528 2.528 0 01-2.522-2.522v-2.522h2.522zm0-1.27a2.528 2.528 0 01-2.522-2.522 2.528 2.528 0 012.522-2.522h6.313A2.528 2.528 0 0124 15.164a2.528 2.528 0 01-2.523 2.522h-6.313z"/></svg>',
      'stripe': '<svg viewBox="0 0 24 24" fill="#635BFF"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/></svg>',
      'paypal': '<svg viewBox="0 0 24 24" fill="#003087"><path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 00-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 00.554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 01.923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/></svg>'
    };
    return this.sanitizer.bypassSecurityTrustHtml(icons[client] || '');
  }
}
