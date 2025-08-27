import { Component } from '@angular/core';
import { WebinarData } from '../../../layouts/webinar-card/webinar-card.component';

export interface FilterOption {
  name: string;
  checked: boolean;
}

export interface FilterSection {
  title: string;
  isExpanded: boolean;
  searchTerm: string;
  options: FilterOption[];
}

@Component({
  selector: 'app-webinar-like-section',
  templateUrl: './webinar-like-section.component.html',
  styleUrl: './webinar-like-section.component.scss'
})
export class WebinarLikeSectionComponent {

  filterSections: FilterSection[] = [
    {
      title: 'Specialty',
      isExpanded: true,
      searchTerm: '',
      options: [
        { name: 'Accupuncture', checked: false },
        { name: 'Allergy and Immunology', checked: false },
        { name: 'Anaesthesiology', checked: false },
        { name: 'Clinical Nutrition', checked: false },
        { name: 'General Practitioner', checked: false },
        { name: 'Cardiology', checked: false },
        { name: 'Dermatology', checked: false },
        { name: 'Emergency Medicine', checked: false }
      ]
    },
    {
      title: 'Topics',
      isExpanded: false,
      searchTerm: '',
      options: [
        { name: 'COVID-19', checked: false },
        { name: 'Diabetes', checked: false },
        { name: 'Hypertension', checked: false },
        { name: 'Mental Health', checked: false },
        { name: 'Pediatrics', checked: false }
      ]
    },
    {
      title: 'Speakers',
      isExpanded: false,
      searchTerm: '',
      options: [
        { name: 'Dr. John Smith', checked: false },
        { name: 'Dr. Sarah Johnson', checked: false },
        { name: 'Dr. Michael Chen', checked: false },
        { name: 'Dr. Emily Rodriguez', checked: false }
      ]
    },
    {
      title: 'Pharma & associations',
      isExpanded: false,
      searchTerm: '',
      options: [
        { name: 'PDGI Indonesia', checked: false },
        { name: 'Roche', checked: false },
        { name: 'Pfizer', checked: false },
        { name: 'GSK', checked: false },
        { name: 'Bayer', checked: false }
      ]
    }
  ];

  webinarsData: WebinarData[] = [
    {
      thumbnail: 'assets/images/Image-1.png',
      isLive: false,
      viewerCount: '0',
      duration: '24:50',
      credits: 1.5,
      title: 'Perspectives in The Covid19 Management of Parox Health caretine',
      speaker: {
        name: 'PDGI Indonesia',
        avatar: 'assets/icons/avatar-1.png',
      },
      showVideoOverlay: true,
      showWatchNow: false,
      showNotify: false,
      showTopRightControls: false,
      showCreditExpiry: true,
      expiryDay: 23,
      expirySoon: false,
      showProfileHeader: true,
      showInteractiveTab: true,
      interactiveData: {
        likes: 204,
        comments: 40,
        views: 4000,
      },
    },
    {
      thumbnail: 'assets/images/continue-watchinng-image.jpg',
      isLive: false,
      viewerCount: '0',
      duration: '24:50',
      credits: 2,
      title: 'New Perspectives in The Covid19 Management of Parox Health caretine',
      speaker: {
        name: 'PDGI Indonesia',
        avatar: 'assets/icons/avatar-1.png',
      },
      showVideoOverlay: true,
      showWatchNow: false,
      showNotify: false,
      showTopRightControls: false,
      showCreditExpiry: true,
      expiryDay: 12,
      expirySoon: true,
      showProfileHeader: true,
      showInteractiveTab: true,
      interactiveData: {
        likes: 120,
        comments: 222,
        views: 9393,
      },
    },
    {
      thumbnail: 'assets/images/Image-4.jpg',
      isLive: false,
      viewerCount: '0',
      duration: '24:50',
      credits: 1.5,
      title: 'Perspectives in The Covid19 Management of Parox Health caretine',
      speaker: {
        name: 'PDGI Indonesia',
        avatar: 'assets/icons/avatar-1.png',
      },
      showVideoOverlay: true,
      showWatchNow: false,
      showNotify: false,
      showTopRightControls: false,
      showCreditExpiry: true,
      expiryDay: 23,
      expirySoon: false,
      showProfileHeader: true,
      showInteractiveTab: true,
      interactiveData: {
        likes: 204,
        comments: 40,
        views: 4000,
      },
    },
    {
      thumbnail: 'assets/images/Image-5.png',
      isLive: false,
      viewerCount: '0',
      duration: '24:50',
      credits: 2,
      title: 'New Perspectives in The Covid19 Management of Parox Health caretine',
      speaker: {
        name: 'PDGI Indonesia',
        avatar: 'assets/icons/avatar-1.png',
      },
      showVideoOverlay: true,
      showWatchNow: false,
      showNotify: false,
      showTopRightControls: false,
      showCreditExpiry: true,
      expiryDay: 30,
      expirySoon: false,
      showProfileHeader: true,
      showInteractiveTab: true,
      interactiveData: {
        likes: 120,
        comments: 222,
        views: 9393,
      },
    }
  ];

  constructor() {}

  toggleSection(index: number) {
    this.filterSections[index].isExpanded = !this.filterSections[index].isExpanded;
  }

  getFilteredOptions(section: FilterSection): FilterOption[] {
    if (!section.searchTerm) {
      return section.options;
    }
    return section.options.filter(option =>
      option.name.toLowerCase().includes(section.searchTerm.toLowerCase())
    );
  }

  trackByTitle(index: number, webinar: WebinarData): string {
    return webinar.title;
  }
}
