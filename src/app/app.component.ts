import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule, FormsModule],
  template: `
    <app-navbar />
    <main>
      <router-outlet />
    </main>
    <app-footer />

    <!-- GLOBAL CHATBOT -->
    <div class="chatbot-container" [class.open]="chatOpen">
      <button class="chat-toggle" (click)="toggleChat()" [class.active]="chatOpen">
        @if (!chatOpen) {
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          <span class="chat-badge">1</span>
        } @else {
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        }
      </button>

      <div class="chat-window">
        <div class="chat-header">
          <div class="chat-header-info">
            <div class="chat-avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect x="8" y="8" width="8" height="8" rx="2"/><path d="M12 16v4h4"/><path d="M8 12H4"/><path d="M20 12h-4"/></svg>
            </div>
            <div class="chat-header-text">
              <h4>BrightBot</h4>
              <span class="online-status">
                <span class="status-dot"></span>
                Online now
              </span>
            </div>
          </div>
          <button class="chat-minimize" (click)="toggleChat()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>

        <div class="chat-messages" #chatMessagesContainer>
          @for (msg of chatMessages; track $index) {
            <div class="chat-message" [class.bot]="msg.isBot" [class.user]="!msg.isBot">
              @if (msg.isBot) {
                <div class="message-avatar">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect x="8" y="8" width="8" height="8" rx="2"/><path d="M12 16v4h4"/></svg>
                </div>
              }
              <div class="message-bubble">
                <p>{{ msg.text }}</p>
                <span class="message-time">{{ msg.time }}</span>
              </div>
            </div>
          }
          @if (isTyping) {
            <div class="chat-message bot">
              <div class="message-avatar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect x="8" y="8" width="8" height="8" rx="2"/><path d="M12 16v4h4"/></svg>
              </div>
              <div class="message-bubble typing">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
              </div>
            </div>
          }
        </div>

        @if (showQuickReplies) {
          <div class="chat-quick-replies">
            @for (reply of quickReplies; track reply) {
              <button class="quick-reply" (click)="sendQuickReply(reply)">{{ reply }}</button>
            }
          </div>
        }

        <div class="chat-input">
          <input 
            type="text" 
            [(ngModel)]="chatInput" 
            (keyup.enter)="sendMessage()" 
            placeholder="Type your message..."
            name="chatInput"
          >
          <button class="send-btn" (click)="sendMessage()" [disabled]="!chatInput.trim()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatMessagesContainer') private chatContainer!: ElementRef;

  chatOpen = false;
  chatInput = '';
  isTyping = false;
  showQuickReplies = true;
  chatMessages: { text: string; isBot: boolean; time: string }[] = [];
  quickReplies = ['Our Services', 'Get Quote', 'Portfolio', 'Contact Us'];

  constructor(private router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  ngOnInit() {
    this.chatMessages = [
      {
        text: "Hi there! I'm BrightBot, your virtual assistant. How can I help you today?",
        isBot: true,
        time: this.getCurrentTime(),
      },
    ];
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      if (this.chatContainer) {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }
    } catch (err) {}
  }

  getCurrentTime(): string {
    return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  toggleChat() {
    this.chatOpen = !this.chatOpen;
  }

  sendMessage() {
    const trimmedInput = this.chatInput.trim();
    if (!trimmedInput) return;

    this.showQuickReplies = false;
    this.chatMessages.push({ text: trimmedInput, isBot: false, time: this.getCurrentTime() });

    const userMessage = trimmedInput.toLowerCase();
    this.chatInput = '';
    this.isTyping = true;

    setTimeout(() => {
      this.isTyping = false;
      const response = this.getBotResponse(userMessage);
      const msgIndex = this.chatMessages.length;
      this.chatMessages.push({ text: '', isBot: true, time: this.getCurrentTime() });
      this.typeMessage(msgIndex, response, 0);
    }, 1000);
  }

  typeMessage(index: number, fullText: string, charIndex: number) {
    if (charIndex < fullText.length) {
      const chunkSize = 2;
      this.chatMessages[index].text += fullText.substring(charIndex, charIndex + chunkSize);
      setTimeout(() => this.typeMessage(index, fullText, charIndex + chunkSize), 15);
    }
  }

  sendQuickReply(reply: string) {
    this.chatInput = reply;
    this.sendMessage();
  }

  getBotResponse(msg: string): string {
    if (this.match(msg, ['your name', 'who are you', 'naam', 'kon ho', 'kaun'])) {
      return "I'm BrightBot! Your virtual assistant at BrightBiz Digital. Nice to meet you!";
    }
    if (this.match(msg, ['hello', 'hi', 'hey', 'salam', 'aoa'])) {
      return 'Hello! Welcome to BrightBiz Digital! How can I help you today?';
    }
    if (this.match(msg, ['service', 'services', 'offer', 'kya karte'])) {
      return 'We offer:\n\n- Website Design\n- E-Commerce\n- Web Applications\n- Mobile Apps\n- SEO & Marketing\n- Branding\n\nWhich interests you?';
    }
    if (this.match(msg, ['website', 'web design', 'site'])) {
      return 'Website Design:\n\n- Custom responsive designs\n- WordPress & CMS\n- Landing pages\n\nFrom $1,000 | 1-3 weeks';
    }
    if (this.match(msg, ['ecommerce', 'e-commerce', 'store', 'shop'])) {
      return 'E-Commerce:\n\n- Shopify stores\n- WooCommerce\n- Payment integration\n\nFrom $2,500 | 2-4 weeks';
    }
    if (this.match(msg, ['mobile', 'app', 'ios', 'android'])) {
      return 'Mobile Apps:\n\n- iOS & Android\n- React Native, Flutter\n- UI/UX design\n\nFrom $5,000 | 6-12 weeks';
    }
    if (this.match(msg, ['price', 'pricing', 'cost', 'quote', 'kitna', 'budget'])) {
      return 'Pricing:\n\n- Website: $1,000 - $5,000\n- E-Commerce: $2,500 - $15,000\n- Mobile App: $5,000+\n- SEO: $500/month\n\nWant a custom quote?';
    }
    if (this.match(msg, ['portfolio', 'work', 'example', 'project'])) {
      return 'Our Portfolio:\n\n- 200+ projects\n- 150+ clients\n- 50+ industries\n\nVisit /portfolio to see our work!';
    }
    if (this.match(msg, ['contact', 'email', 'phone', 'call'])) {
      return 'Contact Us:\n\nEmail: hello@brightbiz.digital\nPhone: +1 (234) 567-8900\n\nOr visit our Contact page!';
    }
    if (this.match(msg, ['time', 'how long', 'timeline', 'delivery'])) {
      return 'Timelines:\n\n- Website: 1-2 weeks\n- E-Commerce: 2-4 weeks\n- Mobile App: 6-12 weeks\n\nRush delivery available!';
    }
    if (this.match(msg, ['thank', 'thanks', 'shukriya'])) {
      return "You're welcome! Anything else I can help with?";
    }
    if (this.match(msg, ['bye', 'goodbye', 'later'])) {
      return 'Goodbye! Thanks for chatting. Come back anytime!';
    }
    if (this.match(msg, ['yes', 'yeah', 'sure', 'ok', 'haan'])) {
      return 'Great! Fill out our contact form or call +1 (234) 567-8900 to get started!';
    }
    return 'Thanks for your message!\n\nI can help with:\n- Services\n- Pricing\n- Portfolio\n- Contact\n\nWhat would you like to know?';
  }

  private match(msg: string, keywords: string[]): boolean {
    return keywords.some((k) => msg.includes(k));
  }
}
