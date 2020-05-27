import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from 'src/models/Tweet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tweets: Tweet[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.retrieveTweets();
  }

  retrieveTweets(): void {
    let tweets: Tweet[] = [];

    this.http.get<Tweet[]>('http://localhost:3000/api/tweets/').subscribe(data => {
      let tweetData = <Tweet[]>data;
      tweetData.forEach(tweet => {
        if (tweet.message && tweet.user) {
          tweets.push(tweet);
        }
      })
    });

    this.tweets = tweets;
  }

}
