import { Component, Input } from '@angular/core';

export interface ContinueWatchingData {
  backgroundImage: string;
  title: string;
  speaker: {
    name: string;
    avatar: string;
    role: string;
  };
  duration: string;
  timeLeft: string;
  sponsor?: string;
}

@Component({
  selector: 'app-continue-watching-card',
  templateUrl: './continue-watching-card.component.html',
  styleUrl: './continue-watching-card.component.scss'
})
export class ContinueWatchingCardComponent {
  @Input() cardData: ContinueWatchingData = {
    backgroundImage: 'assets/images/continue-watchinng-image.jpg',
    title: 'More Than Skin Deep: Treating Eczema and Allergy',
    speaker: {
      name: 'Dr. Goh Siew Hoong',
      avatar: 'assets/icons/avatar-1.png',
      role: 'Consultant Dermatologist'
    },
    duration: '24:50',
    timeLeft: '10 min left',
    sponsor: 'Columbia Asia'
  };
}
