import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página Inicial', url: '/folder/Inbox', icon: 'home' },
    { title: 'Cadastro', url: '/cadastro', icon: 'clipboard' },
    { title: 'Contatos', url: '/folder/Outbox', icon: 'paper-plane'}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
