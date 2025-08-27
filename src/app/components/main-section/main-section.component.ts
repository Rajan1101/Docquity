import { Component } from '@angular/core';
import { WebinarData } from '../../layouts/webinar-card/webinar-card.component';
import { ContinueWatchingData } from '../../layouts/continue-watching-card/continue-watching-card.component';
import { SpeakerData } from '../../layouts/speaker-card/speaker-card.component';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {

  webinarsData: WebinarData[] = [
    {
      thumbnail: 'assets/images/Image-1.png',
      isLive: true,
      viewerCount: '200+',
      duration: '24:50',
      credits: 2,
      title: 'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthma from',
      speaker: {
        name: 'PDGI Indonesia',
        avatar: 'assets/icons/avatar-1.png',
      },
      showVideoOverlay: true,
      showWatchNow: true,
      showNotify: false,
      showTopRightControls: false,
      showCreditExpiry: false,
      expiryDay: 15,
      expirySoon: false,
      showProfileHeader: false,
      showInteractiveTab: false,
      interactiveData: {
        likes: 20,
        comments: 12,
        views: 750,
      },
    },
    {
      thumbnail: 'assets/images/Image-2.png',
      isLive: true,
      viewerCount: '150+',
      duration: '24:50',
      credits: 1.5,
      title: 'Virus is like any other respiratory virus that causes common',
      speaker: {
        name: 'GSK',
        avatar: 'assets/icons/avatar-1.png',
      },
      showVideoOverlay: true,
      showWatchNow: true,
      showNotify: false,
      showTopRightControls: false,
      showCreditExpiry: true,
      expiryDay: 3,
      expirySoon: true,
      showProfileHeader: false,
      showInteractiveTab: false,
      interactiveData: {
        likes: 15,
        comments: 8,
        views: 500,
      },
    },
    {
      thumbnail: 'assets/images/Image-3.png',
      isLive: true,
      viewerCount: '300+',
      duration: '24:50',
      credits: 2,
      title: 'Virus is like any other respiratory virus that causes common',
      speaker: {
        name: 'Bayer',
        avatar: 'assets/icons/avatar-1.png',
      },
      showVideoOverlay: true,
      showWatchNow: true,
      showNotify: false,
      showTopRightControls: true,
      showCreditExpiry: false,
      expiryDay: 15,
      expirySoon: false,
      showProfileHeader: false,
      showInteractiveTab: false,
      interactiveData: {
        likes: 35,
        comments: 20,
        views: 1200,
      },
    }
  ];

  upcomingWebinarsData: WebinarData[] = [
    {
      thumbnail: 'assets/images/Image-4.jpg',
      isLive: false,
      viewerCount: '',
      duration: '',
      credits: 1.5,
      title: 'The Covid19 Management of Parox Health caretine',
      speaker: {
        name: 'PDGI Indonesia',
        avatar: 'assets/icons/avatar-1.png',
      },
      showVideoOverlay: false,
      showWatchNow: false,
      showNotify: true,
      showTopRightControls: false,
      showCreditExpiry: true,
      expiryDay: 15,
      expirySoon: false,
      showProfileHeader: false,
      showInteractiveTab: false,
      interactiveData: {
        likes: 0,
        comments: 0,
        views: 0,
      },
    },
    {
      thumbnail: 'assets/images/Image-5.png',
      isLive: false,
      viewerCount: '',
      duration: '',
      credits: 2,
      title: 'Perspectives in The Covid19 Management of Parox Health',
      speaker: {
        name: 'PDGI Indonesia',
        avatar: 'assets/icons/avatar-1.png',
      },
      showVideoOverlay: false,
      showWatchNow: false,
      showNotify: true,
      showTopRightControls: false,
      showCreditExpiry: false,
      expiryDay: 15,
      expirySoon: false,
      showProfileHeader: false,
      showInteractiveTab: false,
      interactiveData: {
        likes: 0,
        comments: 0,
        views: 0,
      },
    },
    {
      thumbnail: 'assets/images/Image-6.jpg',
      isLive: false,
      viewerCount: '',
      duration: '',
      credits: 2,
      title: 'The Covid19 Management of Parox Health caretine',
      speaker: {
        name: 'PDGI Indonesia',
        avatar: 'assets/icons/avatar-1.png',
      },
      showVideoOverlay: false,
      showWatchNow: false,
      showNotify: true,
      showTopRightControls: false,
      showCreditExpiry: false,
      expiryDay: 15,
      expirySoon: false,
      showProfileHeader: false,
      showInteractiveTab: false,
      interactiveData: {
        likes: 0,
        comments: 0,
        views: 0,
      },
    }
  ];

  continueWatchingData: ContinueWatchingData[] = [
    {
      backgroundImage: 'assets/images/continue-watchinng-image.jpg',
      title: 'New Perspectives in The Covid19 Management',
      speaker: {
        name: 'Pfizer Indonesia',
        avatar: 'assets/icons/avatar-1.png',
        role: 'Medical Expert'
      },
      duration: '24:50',
      timeLeft: '10 min left'
    },
    {
      backgroundImage: 'assets/images/continue-watchinng-image.jpg',
      title: 'Perspectives in The Covid19 Management',
      speaker: {
        name: 'Bayer',
        avatar: 'assets/icons/avatar-1.png',
        role: 'Medical Expert'
      },
      duration: '24:50',
      timeLeft: '10 min left'
    },
    {
      backgroundImage: 'assets/images/continue-watchinng-image.jpg',
      title: 'New Perspectives in The 12',
      speaker: {
        name: 'Bayer',
        avatar: 'assets/icons/avatar-1.png',
        role: 'Medical Expert'
      },
      duration: '24:50',
      timeLeft: '10 min left'
    },
    {
      backgroundImage: 'assets/images/continue-watchinng-image.jpg',
      title: 'New Perspectives in The 12',
      speaker: {
        name: 'Bayer',
        avatar: 'assets/icons/avatar-1.png',
        role: 'Medical Expert'
      },
      duration: '24:50',
      timeLeft: '10 min left'
    },
    {
      backgroundImage: 'assets/images/continue-watchinng-image.jpg',
      title: 'New Perspectives in The Covid19 Management',
      speaker: {
        name: 'Pfizer Indonesia',
        avatar: 'assets/icons/avatar-1.png',
        role: 'Medical Expert'
      },
      duration: '24:50',
      timeLeft: '10 min left'
    }
  ];

  webinarsInterestBasedData: WebinarData[] = [
    {
      thumbnail: 'assets/images/Image-4.jpg',
      isLive: false,
      viewerCount: '200+',
      duration: '24:50',
      credits: 2,
      title: 'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthma from',
      speaker: {
        name: 'PDGI Indonesia',
        avatar: 'assets/icons/avatar-1.png',
      },
      keyHighlight: {
        Title: 'RELATED OUTLINES',
        content: 'Manage chronic and complex diseases',
        image: true
      },
      showVideoOverlay: true,
      showWatchNow: true,
      showNotify: false,
      showTopRightControls: false,
      showCreditExpiry: false,
      expiryDay: 15,
      expirySoon: false,
      showProfileHeader: false,
      showInteractiveTab: false,
      interactiveData: {
        likes: 20,
        comments: 12,
        views: 750,
      },
    },
    {
      thumbnail: 'assets/images/Image-5.png',
      isLive: false,
      viewerCount: '150+',
      duration: '24:50',
      credits: 1.5,
      title: 'Virus is like any other respiratory virus that causes common',
      speaker: {
        name: 'GSK',
        avatar: 'assets/icons/avatar-1.png',
      },
      keyHighlight: {
        Title: 'RELATED OUTLINES',
        content: 'Manage chronic and complex diseases',
        image: true
      },
      showVideoOverlay: true,
      showWatchNow: false,
      showNotify: true,
      showTopRightControls: false,
      showCreditExpiry: true,
      expiryDay: 3,
      expirySoon: true,
      showProfileHeader: false,
      showInteractiveTab: false,
      interactiveData: {
        likes: 15,
        comments: 8,
        views: 500,
      },
    },
    {
      thumbnail: 'assets/images/Image-2.png',
      isLive: true,
      showLiveIconLight: true,
      viewerCount: '300+',
      duration: '24:50',
      credits: 1.5,
      title: 'Virus is like any other respiratory virus that causes common',
      speaker: {
        name: 'Bayer Indonesia',
        avatar: 'assets/icons/avatar-2.png',
      },
      keyHighlight: {
        Title: 'RELATED OUTLINES',
        content: 'Manage chronic and complex diseases',
        image: true
      },
      showVideoOverlay: true,
      showWatchNow: true,
      showNotify: false,
      showTopRightControls: true,
      showCreditExpiry: false,
      expiryDay: 15,
      expirySoon: false,
      showProfileHeader: false,
      showInteractiveTab: false,
      interactiveData: {
        likes: 35,
        comments: 20,
        views: 1200,
      },
    }
  ];

  topSpeakersData: SpeakerData[] = [
    {
      name: 'Dr Chong wui',
      specialty: 'Gastrologist, General Physician',
      avatar: 'assets/images/Doctor.png',
      isLive: true
    },
    {
      name: 'Dr Sarah Johnson',
      specialty: 'Cardiologist, Heart Specialist',
      avatar: 'assets/images/Doctor.png',
      isLive: false
    },
    {
      name: 'Dr Michael Chen',
      specialty: 'Neurologist, Brain Specialist',
      avatar: 'assets/images/Doctor.png',
      isLive: false
    },
    {
      name: 'Dr Emily Rodriguez',
      specialty: 'Dermatologist, Skin Specialist',
      avatar: 'assets/images/Doctor.png',
      isLive: false
    },
    {
      name: 'Dr James Wilson',
      specialty: 'Pediatrician, Child Specialist',
      avatar: 'assets/images/Doctor.png',
      isLive: false
    }
  ];

  // TrackBy function for better performance with ngFor
  trackByTitle(index: number, webinar: WebinarData): string {
    return webinar.title;
  }

  // TrackBy function for continue watching cards
  trackByContinueWatchingTitle(index: number, card: ContinueWatchingData): string {
    return card.title;
  }

  // TrackBy function for speakers
  trackBySpeakerName(index: number, speaker: SpeakerData): string {
    return speaker.name;
  }
}
