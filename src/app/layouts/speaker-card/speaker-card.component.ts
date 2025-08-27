import { Component, Input } from '@angular/core';

export interface SpeakerData {
  name: string;
  specialty: string;
  avatar: string;
  isLive: boolean;
}

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrl: './speaker-card.component.scss'
})
export class SpeakerCardComponent {
  @Input() speakerData: SpeakerData = {
    name: 'Dr Chong wui',
    specialty: 'Gastrologist, General Physician',
    avatar: 'assets/images/Doctor.png',
    isLive: true
  };

  constructor() {}
}
