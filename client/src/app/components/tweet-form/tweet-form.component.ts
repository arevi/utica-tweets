import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})
export class TweetFormComponent implements OnInit {
  @Output() updateTweets: EventEmitter<any> = new EventEmitter();

  tweetContent: string = "";
  tweetCharacters: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitTweet() {
    console.log('test');
    this.http.post('http://localhost:3000/api/tweets/new/', {
      message: this.tweetContent,
      user: "Test"
    }).subscribe(data => {
      this.tweetContent = "";
      this.tweetCharacters = 0;
      this.updateTweets.emit();
    });
  }

  countCharacters() {
    this.tweetCharacters = this.tweetContent.length;
  }
}
