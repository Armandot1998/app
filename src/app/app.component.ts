import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPaginas = [
    { title: 'Panadería', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Pastelería', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Repostería', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Galletería', url: '/folder/Archived', icon: 'archive' },
    { title: 'Especiales', url: '/folder/Trash', icon: 'trash' },
  ];

  constructor() {}
}
