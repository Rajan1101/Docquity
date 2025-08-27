import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userProfile = {
    name: 'Aaron',
    avatar: 'assets/images/profile picture.png'
  };

  notifications = {
    count: 3,
    hasNew: true
  };

  constructor() { }

  onSearchSubmit() {
    console.log('Search submitted');
  }

  onProfileClick() {
    console.log('Profile clicked');
  }

  onNotificationClick() {
    console.log('Notifications clicked');
  }

  onPostClick() {
    console.log('Post clicked');
  }
}
