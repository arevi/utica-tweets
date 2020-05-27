import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from 'src/models/Tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;
  message: string = "";
  date: string = null;

  constructor() { }

  ngOnInit(): void {
    this.message = this.tweet.message;
    this.date = new Date(this.tweet.date).toLocaleTimeString();
  }

}
