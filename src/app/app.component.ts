import { Component, OnInit } from '@angular/core';
import { BloggerService } from './blogger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // data
  title = 'My First Angular App';
  blogger: Blogger = {
    id: 1,
    name: 'OutisJie'
  };
  bloggers: Blogger[];
  selectedBlogger: Blogger;

  constructor(private bloggerService: BloggerService) {}

  ngOnInit() {
    this.getBloggers();
  }

  // function
  onSelect(blogger: Blogger): void {
    this.selectedBlogger = blogger;
  }
  getBloggers(): void {
    this.bloggers = this.bloggerService.getBloggers();
  }
}
export class Blogger {
  id: number;
  name: string;
}
export const BLOGGERS: Blogger[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


