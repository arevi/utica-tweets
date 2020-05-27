import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatsComponent } from './pages/stats/stats.component';
import { TweetFormComponent } from './components/tweet-form/tweet-form.component';
import { FormsModule } from '@angular/forms';
import { TweetComponent } from './components/tweet/tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    HomeComponent,
    NavbarComponent,
    StatsComponent,
    TweetFormComponent,
    TweetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
