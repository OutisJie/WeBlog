import { Component, OnInit, Input } from '@angular/core';
import { Blogger } from '../app.component';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {
  @Input() blogger: Blogger;

  constructor() { }

  ngOnInit() {
  }

}
