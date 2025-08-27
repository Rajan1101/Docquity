import { Component } from '@angular/core';

export interface TopicData {
  name: string;
  count: number;
}

@Component({
  selector: 'app-browse-topic',
  templateUrl: './browse-topic.component.html',
  styleUrl: './browse-topic.component.scss'
})
export class BrowseTopicComponent {

  topicsData: TopicData[] = [
    { name: 'Cardiologist', count: 4 },
    { name: 'Emergency', count: 2 },
    { name: 'General Medicine', count: 9 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency Medicine', count: 8 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency Medicine', count: 8 },
    { name: 'Cardiologist', count: 4 },
    { name: 'General Medicine', count: 9 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency', count: 2 },
    { name: 'Cardiologist', count: 4 },
    { name: 'Emergency Medicine', count: 8 },
    { name: 'Cardiologist', count: 4 },
    { name: 'Emergency', count: 2 },
    { name: 'General Medicine', count: 9 },
    { name: 'Cardiologist', count: 4 },
    { name: 'Emergency', count: 2 },
    { name: 'General Medicine', count: 9 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency Medicine', count: 8 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency Medicine', count: 8 },
    { name: 'Cardiologist', count: 4 },
    { name: 'General Medicine', count: 9 },
    { name: 'General Medicine', count: 4 },
  ];

  get firstHalfTopics() {
    const halfLength = Math.ceil(this.topicsData.length / 2);
    return this.topicsData.slice(0, halfLength);
  }

  get secondHalfTopics() {
    const halfLength = Math.ceil(this.topicsData.length / 2);
    return this.topicsData.slice(halfLength, this.topicsData.length);
  }

  constructor() {}
}
