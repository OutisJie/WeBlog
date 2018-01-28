import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Blogger } from './app.component';
import { BLOGGERS } from './app.component';

@Injectable()
export class BloggerService {

  constructor() { }

  getBloggers(): Blogger[] {
    return BLOGGERS;
  }
}
