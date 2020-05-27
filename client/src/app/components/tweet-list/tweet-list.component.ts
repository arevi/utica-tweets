import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Tweet } from '../../../models/Tweet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {
  @Input() tweets: Tweet[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

}
