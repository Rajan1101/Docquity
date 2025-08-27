import { Component, Input } from '@angular/core';

export interface WebinarData {
  thumbnail: string;
  isLive: boolean;
  showLiveIconLight?: boolean;
  viewerCount: string;
  duration: string;
  credits: number;
  title: string;
  speaker: {
    name: string;
    avatar: string;
  };
  keyHighlight?: {
    Title: string;
    content: string;
    image?: boolean;
  };
  showVideoOverlay: boolean;
  showWatchNow: boolean;
  showNotify: boolean;
  showTopRightControls: boolean;
  showCreditExpiry: boolean;
  expiryDay: number,
  expirySoon: boolean;
  showProfileHeader: boolean;
  showInteractiveTab: boolean;
  interactiveData: {
    likes: number;
    comments: number;
    views: number;
  };
}

export interface ProfileData {
  name: string;
  avatar: string;
  sponsoredBy: string;
  followers: string;
  timeAgo: string;
  images: {
    plusIcon: string;
    menuIcon: string;
    liveIcon: string;
    peopleIcon: string;
    starIcon: string;
    bellIcon: string;
    muteIcon: string;
    ccIcon: string;
    likeIcon: string;
    commentIcon: string;
    repostIcon: string;
    shareIcon: string;
    keyHighlightImage: string;
  };
}

@Component({
  selector: 'app-webinar-card',
  templateUrl: './webinar-card.component.html',
  styleUrl: './webinar-card.component.scss',
})
export class WebinarCardComponent {
  @Input() webinarData: WebinarData = {
    thumbnail: 'assets/images/Image-1.png',
    isLive: true,
    showLiveIconLight: true,
    viewerCount: '200+',
    duration: '24:50',
    credits: 2,
    title:
      'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthma from',
    speaker: {
      name: 'PDGI Indonesia',
      avatar: 'assets/icons/avatar-1.png',
    },
    showVideoOverlay: true,
    showWatchNow: false,
    showNotify: false,
    showTopRightControls: true,
    showCreditExpiry: true,
    expiryDay: 15,
    expirySoon: false,
    showProfileHeader: false,
    showInteractiveTab: true,
    interactiveData: {
      likes: 20,
      comments: 12,
      views: 750,
    },
  };

  // Default keyHighlight fallback
  defaultKeyHighlight = {
    Title: 'KEY HIGHLIGHTS',
    content: 'Manage chronic and complex diseases',
    image: false
  };

  // Getter to return keyHighlight or default
  get currentKeyHighlight() {
    return this.webinarData.keyHighlight || this.defaultKeyHighlight;
  }

  profileData: ProfileData = {
    name: 'PDGI Indonesia',
    avatar: 'assets/icons/avatar-1.png',
    sponsoredBy: 'Sponsored by Roche',
    followers: '2845 followers',
    timeAgo: '30 min ago',
    images: {
      plusIcon: 'assets/icons/plus.png',
      menuIcon: 'assets/icons/three dots.svg',
      liveIcon: 'assets/icons/Live-minimal.svg',
      peopleIcon: 'assets/icons/People.svg',
      starIcon: 'assets/icons/star.png',
      bellIcon: 'assets/icons/Bell.svg',
      muteIcon: 'assets/icons/Mute.svg',
      ccIcon: 'assets/icons/cc.png',
      likeIcon: 'assets/icons/Upvote.png',
      commentIcon: 'assets/icons/Coment.png',
      repostIcon: 'assets/icons/repost.png',
      shareIcon: 'assets/icons/Forward.png',
      keyHighlightImage: 'assets/images/cronic-image.png'
    },
  };

  constructor() {}
}
