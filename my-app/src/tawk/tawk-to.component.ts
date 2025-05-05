// tawk-chat.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tawk-chat',
  standalone: true,
  template: '<div id="tawk-chat-container"></div>',
  styles: [`
    #tawk-chat-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }
  `]
})
export class TawkChatComponent implements OnInit, OnDestroy {
  private tawkScriptId = 'tawk-chat-script';

  ngOnInit(): void {
    this.loadTawkToScript();
  }

  ngOnDestroy(): void {
    this.removeTawkToScript();
  }

  private loadTawkToScript(): void {
    if (document.getElementById(this.tawkScriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = this.tawkScriptId;
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_TAWKTO_WIDGET_ID/default';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
  }

  private removeTawkToScript(): void {
    const script = document.getElementById(this.tawkScriptId);
    if (script) {
      script.remove();
    }
  }

  // Public methods to control the chat
  public showChat(): void {
    if (typeof (window as any).Tawk_API !== 'undefined') {
      (window as any).Tawk_API.showWidget();
    }
  }

  public hideChat(): void {
    if (typeof (window as any).Tawk_API !== 'undefined') {
      (window as any).Tawk_API.hideWidget();
    }
  }

  public toggleChat(): void {
    if (typeof (window as any).Tawk_API !== 'undefined') {
      (window as any).Tawk_API.toggle();
    }
  }
}