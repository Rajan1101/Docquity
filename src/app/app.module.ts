import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { WebinarCardComponent } from './layouts/webinar-card/webinar-card.component';
import { SpeakerCardComponent } from './layouts/speaker-card/speaker-card.component';
import { ContinueWatchingCardComponent } from './layouts/continue-watching-card/continue-watching-card.component';
import { BrowseTopicComponent } from './components/main-section/browse-topic/browse-topic.component';
import { WebinarLikeSectionComponent } from './components/main-section/webinar-like-section/webinar-like-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    WebinarCardComponent,
    SpeakerCardComponent,
    ContinueWatchingCardComponent,
    BrowseTopicComponent,
    WebinarLikeSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
