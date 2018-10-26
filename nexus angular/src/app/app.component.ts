import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NexusCorp';
  user: string;
  constructor() {

  }

  setUser() {
    var index = document.cookie.search('email');
    if (index < 0)
      this.user = '';
    else
      this.user = document.cookie.slice(document.cookie.search('email') + 6, document.cookie.length);

  }

  logOut() {
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    this.setUser();
  }
}
